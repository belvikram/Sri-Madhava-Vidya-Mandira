import { useState, useEffect } from "react";
import { useI18n } from "@/lib/i18n";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Separator } from "@/components/ui/separator";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Copy, Heart, Phone, Mail, CheckCircle, Smartphone, CreditCard } from "lucide-react";
import { toast } from "@/hooks/use-toast";

const ORG_NAME = "Sri Madhava Vidya Mandira";
const UPI_VPA = "rainbowshiksha@ybl";

export default function Donor() {
  const { t } = useI18n();
  const [selectedAmount, setSelectedAmount] = useState<number | null>(null);
  const [customAmount, setCustomAmount] = useState<string>("");
  const [copiedField, setCopiedField] = useState<string | null>(null);

  const quickAmounts = [500, 1000, 2500, 5000, 10000];

  // Generate UPI payment URL
  const generateUPIUrl = (amount: number) => {
    const upiUrl = `upi://pay?pa=${UPI_VPA}&pn=${encodeURIComponent(ORG_NAME)}&am=${amount}&cu=INR&tn=School%20Donation`;
    return upiUrl;
  };

  // Generate PhonePe deep link
  const generatePhonePeUrl = (amount: number) => {
    return `phonepe://pay?pa=${UPI_VPA}&pn=${encodeURIComponent(ORG_NAME)}&am=${amount}&cu=INR&tn=School%20Donation`;
  };

  // Generate Google Pay deep link
  const generateGooglePayUrl = (amount: number) => {
    return `tez://upi/pay?pa=${UPI_VPA}&pn=${encodeURIComponent(ORG_NAME)}&am=${amount}&cu=INR&tn=School%20Donation`;
  };


  const copyToClipboard = async (text: string, field: string) => {
    try {
      await navigator.clipboard.writeText(text);
      setCopiedField(field);
      toast({
        title: t("donor_thank_you"),
        description: "Copied to clipboard!",
      });
      setTimeout(() => setCopiedField(null), 2000);
    } catch (err) {
      toast({
        title: "Error",
        description: "Failed to copy to clipboard",
        variant: "destructive",
      });
    }
  };

  const handleDonate = () => {
    const amount = selectedAmount || (customAmount ? parseInt(customAmount) : 0);
    if (amount <= 0) {
      toast({
        title: "Invalid Amount",
        description: "Please select or enter a valid donation amount",
        variant: "destructive",
      });
      return;
    }
    
    toast({
      title: t("donor_thank_you"),
      description: t("donor_thank_you_message"),
    });
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 py-8">
      <div className="container mx-auto px-4">
        {/* Header Section */}
        <div className="text-center mb-12">
          <div className="flex justify-center mb-4">
            <div className="p-4 bg-red-100 rounded-full">
              <Heart className="h-12 w-12 text-red-600" />
            </div>
          </div>
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            {t("donor_title")}
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            {t("donor_subtitle")}
          </p>
        </div>

        <div className="max-w-6xl mx-auto">
          {/* Payment Methods Tabs */}
          <Tabs defaultValue="upi" className="w-full">
            <TabsList className="grid w-full grid-cols-2 mb-8">
              <TabsTrigger value="upi" className="flex items-center gap-2">
                <Smartphone className="h-4 w-4" />
                {t("donor_upi_payment_method")}
              </TabsTrigger>
              <TabsTrigger value="bank" className="flex items-center gap-2">
                <CreditCard className="h-4 w-4" />
                {t("donor_bank_transfer")}
              </TabsTrigger>
            </TabsList>

            {/* UPI Payment Tab */}
            <TabsContent value="upi" className="space-y-8">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                {/* UPI Payment Card */}
                <Card className="shadow-lg">
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <div className="p-2 bg-green-100 rounded-lg">
                        <Smartphone className="h-5 w-5 text-green-600" />
                      </div>
                      {t("donor_upi_payment")}
                    </CardTitle>
                    <CardDescription>
                      {t("donor_upi_description")}
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-6">
                    {/* UPI ID */}
                    <div>
                      <Label className="text-sm font-medium text-gray-600">
                        {t("donor_upi_id")}
                      </Label>
                      <div className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                        <span className="font-mono text-sm">{t("donor_upi_id_value")}</span>
                        <Button
                          variant="ghost"
                          size="sm"
                          onClick={() => copyToClipboard(t("donor_upi_id_value"), "upi")}
                        >
                          {copiedField === "upi" ? (
                            <CheckCircle className="h-4 w-4 text-green-600" />
                          ) : (
                            <Copy className="h-4 w-4" />
                          )}
                        </Button>
                      </div>
                    </div>


                    {/* UPI App Buttons */}
                    <div className="space-y-3">
                      <Label className="text-sm font-medium text-gray-600">
                        {t("donor_pay_with_any_upi")}
                      </Label>
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                        <Button
                          onClick={() => {
                            const amount = selectedAmount || (customAmount ? parseInt(customAmount) : 500);
                            if (amount > 0) {
                              window.open(generatePhonePeUrl(amount), '_blank');
                            } else {
                              toast({
                                title: "Invalid Amount",
                                description: "Please select or enter a valid donation amount",
                                variant: "destructive",
                              });
                            }
                          }}
                          className="w-full bg-purple-600 hover:bg-purple-700 text-white"
                        >
                          <Smartphone className="h-4 w-4 mr-2" />
                          {t("donor_pay_with_phonepe")}
                        </Button>
                        <Button
                          onClick={() => {
                            const amount = selectedAmount || (customAmount ? parseInt(customAmount) : 500);
                            if (amount > 0) {
                              window.open(generateGooglePayUrl(amount), '_blank');
                            } else {
                              toast({
                                title: "Invalid Amount",
                                description: "Please select or enter a valid donation amount",
                                variant: "destructive",
                              });
                            }
                          }}
                          className="w-full bg-blue-600 hover:bg-blue-700 text-white"
                        >
                          <Smartphone className="h-4 w-4 mr-2" />
                          {t("donor_pay_with_gpay")}
                        </Button>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                {/* Donation Amount Card */}
                <Card className="shadow-lg">
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <div className="p-2 bg-green-100 rounded-lg">
                        <Heart className="h-5 w-5 text-green-600" />
                      </div>
                      {t("donor_custom_amount")}
                    </CardTitle>
                    <CardDescription>
                      Choose a quick amount or enter your custom donation
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-6">
                    {/* Quick Amount Buttons */}
                    <div>
                      <Label className="text-sm font-medium text-gray-600 mb-3 block">
                        {t("donor_quick_amounts")}
                      </Label>
                      <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
                        {quickAmounts.map((amount) => (
                          <Button
                            key={amount}
                            variant={selectedAmount === amount ? "default" : "outline"}
                            className={`h-12 ${
                              selectedAmount === amount
                                ? "bg-green-600 hover:bg-green-700"
                                : "hover:bg-green-50"
                            }`}
                            onClick={() => {
                              setSelectedAmount(amount);
                              setCustomAmount("");
                            }}
                          >
                            {t(`donor_${amount}`)}
                          </Button>
                        ))}
                        <Button
                          variant={selectedAmount === null && customAmount ? "default" : "outline"}
                          className={`h-12 ${
                            selectedAmount === null && customAmount
                              ? "bg-green-600 hover:bg-green-700"
                              : "hover:bg-green-50"
                          }`}
                          onClick={() => {
                            setSelectedAmount(null);
                            setCustomAmount("");
                          }}
                        >
                          {t("donor_other")}
                        </Button>
                      </div>
                    </div>

                    {/* Custom Amount Input */}
                    <div>
                      <Label htmlFor="custom-amount" className="text-sm font-medium text-gray-600">
                        {t("donor_enter_amount")}
                      </Label>
                      <div className="mt-2">
                        <Input
                          id="custom-amount"
                          type="number"
                          placeholder={t("donor_amount_placeholder")}
                          value={customAmount}
                          onChange={(e) => {
                            setCustomAmount(e.target.value);
                            setSelectedAmount(null);
                          }}
                          className="text-lg"
                        />
                      </div>
                    </div>

                    {/* Selected Amount Display */}
                    {(selectedAmount || customAmount) && (
                      <div className="p-4 bg-green-50 rounded-lg border border-green-200">
                        <div className="text-center">
                          <p className="text-sm text-gray-600 mb-1">Selected Amount</p>
                          <p className="text-2xl font-bold text-green-600">
                            ₹{selectedAmount || customAmount}
                          </p>
                        </div>
                      </div>
                    )}
                  </CardContent>
                </Card>
              </div>
            </TabsContent>

            {/* Bank Transfer Tab */}
            <TabsContent value="bank" className="space-y-8">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                {/* Account Details Card */}
                <Card className="shadow-lg">
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <div className="p-2 bg-blue-100 rounded-lg">
                        <CheckCircle className="h-5 w-5 text-blue-600" />
                      </div>
                      {t("donor_account_details")}
                    </CardTitle>
                    <CardDescription>
                      {t("donor_note_text")}
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-6">
                    {/* Bank Details */}
                    <div className="space-y-4">
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        <div>
                          <Label className="text-sm font-medium text-gray-600">
                            {t("donor_bank_name")}
                          </Label>
                          <div className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                            <span className="font-medium">{t("donor_bank_name_value")}</span>
                            <Button
                              variant="ghost"
                              size="sm"
                              onClick={() => copyToClipboard(t("donor_bank_name_value"), "bank")}
                            >
                              {copiedField === "bank" ? (
                                <CheckCircle className="h-4 w-4 text-green-600" />
                              ) : (
                                <Copy className="h-4 w-4" />
                              )}
                            </Button>
                          </div>
                        </div>

                        <div>
                          <Label className="text-sm font-medium text-gray-600">
                            {t("donor_branch")}
                          </Label>
                          <div className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                            <span className="font-medium">{t("donor_branch_value")}</span>
                            <Button
                              variant="ghost"
                              size="sm"
                              onClick={() => copyToClipboard(t("donor_branch_value"), "branch")}
                            >
                              {copiedField === "branch" ? (
                                <CheckCircle className="h-4 w-4 text-green-600" />
                              ) : (
                                <Copy className="h-4 w-4" />
                              )}
                            </Button>
                          </div>
                        </div>
                      </div>

                      <div>
                        <Label className="text-sm font-medium text-gray-600">
                          {t("donor_account_holder")}
                        </Label>
                        <div className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                          <span className="font-medium">{t("donor_account_holder_value")}</span>
                          <Button
                            variant="ghost"
                            size="sm"
                            onClick={() => copyToClipboard(t("donor_account_holder_value"), "holder")}
                          >
                            {copiedField === "holder" ? (
                              <CheckCircle className="h-4 w-4 text-green-600" />
                            ) : (
                              <Copy className="h-4 w-4" />
                            )}
                          </Button>
                        </div>
                      </div>

                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        <div>
                          <Label className="text-sm font-medium text-gray-600">
                            {t("donor_account_number")}
                          </Label>
                          <div className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                            <span className="font-mono text-sm">{t("donor_account_number_value")}</span>
                            <Button
                              variant="ghost"
                              size="sm"
                              onClick={() => copyToClipboard(t("donor_account_number_value"), "account")}
                            >
                              {copiedField === "account" ? (
                                <CheckCircle className="h-4 w-4 text-green-600" />
                              ) : (
                                <Copy className="h-4 w-4" />
                              )}
                            </Button>
                          </div>
                        </div>

                        <div>
                          <Label className="text-sm font-medium text-gray-600">
                            {t("donor_ifsc_code")}
                          </Label>
                          <div className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                            <span className="font-mono text-sm">{t("donor_ifsc_code_value")}</span>
                            <Button
                              variant="ghost"
                              size="sm"
                              onClick={() => copyToClipboard(t("donor_ifsc_code_value"), "ifsc")}
                            >
                              {copiedField === "ifsc" ? (
                                <CheckCircle className="h-4 w-4 text-green-600" />
                              ) : (
                                <Copy className="h-4 w-4" />
                              )}
                            </Button>
                          </div>
                        </div>
                      </div>
                    </div>

                    <Separator />

                    {/* Contact Information */}
                    <div>
                      <h3 className="text-lg font-semibold mb-3">{t("donor_contact_info")}</h3>
                      <div className="space-y-2">
                        <div className="flex items-center gap-2 text-gray-600">
                          <Phone className="h-4 w-4" />
                          <span>{t("donor_contact_phone")}</span>
                        </div>
                        <div className="flex items-center gap-2 text-gray-600">
                          <Mail className="h-4 w-4" />
                          <span>{t("donor_contact_email")}</span>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                {/* Bank Transfer Amount Card */}
                <Card className="shadow-lg">
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <div className="p-2 bg-blue-100 rounded-lg">
                        <Heart className="h-5 w-5 text-blue-600" />
                      </div>
                      {t("donor_custom_amount")}
                    </CardTitle>
                    <CardDescription>
                      Choose a quick amount or enter your custom donation
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-6">
                    {/* Quick Amount Buttons */}
                    <div>
                      <Label className="text-sm font-medium text-gray-600 mb-3 block">
                        {t("donor_quick_amounts")}
                      </Label>
                      <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
                        {quickAmounts.map((amount) => (
                          <Button
                            key={amount}
                            variant={selectedAmount === amount ? "default" : "outline"}
                            className={`h-12 ${
                              selectedAmount === amount
                                ? "bg-blue-600 hover:bg-blue-700"
                                : "hover:bg-blue-50"
                            }`}
                            onClick={() => {
                              setSelectedAmount(amount);
                              setCustomAmount("");
                            }}
                          >
                            {t(`donor_${amount}`)}
                          </Button>
                        ))}
                        <Button
                          variant={selectedAmount === null && customAmount ? "default" : "outline"}
                          className={`h-12 ${
                            selectedAmount === null && customAmount
                              ? "bg-blue-600 hover:bg-blue-700"
                              : "hover:bg-blue-50"
                          }`}
                          onClick={() => {
                            setSelectedAmount(null);
                            setCustomAmount("");
                          }}
                        >
                          {t("donor_other")}
                        </Button>
                      </div>
                    </div>

                    {/* Custom Amount Input */}
                    <div>
                      <Label htmlFor="custom-amount-bank" className="text-sm font-medium text-gray-600">
                        {t("donor_enter_amount")}
                      </Label>
                      <div className="mt-2">
                        <Input
                          id="custom-amount-bank"
                          type="number"
                          placeholder={t("donor_amount_placeholder")}
                          value={customAmount}
                          onChange={(e) => {
                            setCustomAmount(e.target.value);
                            setSelectedAmount(null);
                          }}
                          className="text-lg"
                        />
                      </div>
                    </div>

                    {/* Donate Button */}
                    <Button
                      onClick={handleDonate}
                      className="w-full h-12 text-lg bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700"
                      size="lg"
                    >
                      <Heart className="h-5 w-5 mr-2" />
                      {t("donor_donate_now")}
                    </Button>

                    {/* Selected Amount Display */}
                    {(selectedAmount || customAmount) && (
                      <div className="p-4 bg-blue-50 rounded-lg border border-blue-200">
                        <div className="text-center">
                          <p className="text-sm text-gray-600 mb-1">Selected Amount</p>
                          <p className="text-2xl font-bold text-blue-600">
                            ₹{selectedAmount || customAmount}
                          </p>
                        </div>
                      </div>
                    )}
                  </CardContent>
                </Card>
              </div>
            </TabsContent>
          </Tabs>
        </div>

        {/* Thank You Message */}
        <div className="mt-12 text-center">
          <div className="max-w-2xl mx-auto p-6 bg-white rounded-lg shadow-md">
            <h3 className="text-2xl font-bold text-gray-900 mb-2">
              {t("donor_thank_you")}
            </h3>
            <p className="text-gray-600">
              {t("donor_thank_you_message")}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
