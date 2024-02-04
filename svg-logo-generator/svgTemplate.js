export default function generateSvg({ color, shape, text }) {
    return `
      <svg xmlns="http://www.w3.org/2000/svg" width="100" height="100">
          <rect width="100%" height="100%" fill="${color}" />
          <text x="50%" y="50%" alignment-baseline="middle" text-anchor="middle" font-size="16" fill="white">${text}</text>
      </svg>
      `;
  }