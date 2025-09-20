// Utility functions for handling school images

const schoolImages = [
  'school1.png',
  'school2.png', 
  'school3.png',
  'school4.png',
  'school5.png',
  'school6.png',
  'school7.png',
  'school8.png',
  'school9.png',
  'school10.png',
  'school11.png',
  'school12.png'
];

/**
 * Get a random school image path
 */
export function getRandomSchoolImage(): string {
  const randomIndex = Math.floor(Math.random() * schoolImages.length);
  return `/assets/${schoolImages[randomIndex]}`;
}

/**
 * Get a specific school image by index (1-12)
 */
export function getSchoolImage(index: number): string {
  const imageIndex = Math.max(1, Math.min(12, index)) - 1;
  return `/assets/${schoolImages[imageIndex]}`;
}

/**
 * Get all school image paths
 */
export function getAllSchoolImages(): string[] {
  return schoolImages.map(img => `/assets/${img}`);
}

/**
 * Get the main school logo
 */
export function getLogo(): string {
  return '/assets/logo.png';
}
