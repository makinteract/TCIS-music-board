function setup() {
  createCanvas(400, 800);
}

let frequency = 0.1;

// function draw() {
//   background(220);

//   // Update the control points to oscillate
//   let amplitude = 200; // Amplitude of the oscillation
//   let oscillation = sin(frameCount * frequency) * amplitude;

//   // Draw a bezier line vertically
//   stroke(0);
//   strokeWeight(10);
//   noFill();

//   // Fixed endpoints
//   let x1 = width / 2;
//   let y1 = 0;

//   let x4 = width / 2;
//   let y4 = height;

//   // Oscillating control points - move both in the same direction
//   let x2 = width / 2 + oscillation; // Move right if positive, left if negative
//   let y2 = height / 3;

//   let x3 = width / 2 + oscillation; // Move right if positive, left if negative
//   let y3 = (2 * height) / 3;

//   // Draw the Bezier curve
//   bezier(x1, y1, x2, y2, x3, y3, x4, y4);
// }

function draw() {
  background(220);

  // Update the control points to oscillate
  let amplitude = 200; // Amplitude of the oscillation
  let oscillation = sin(frameCount * frequency) * amplitude;

  // Draw a bezier line vertically
  stroke(0);
  strokeWeight(4);
  noFill();

  // Control points
  let x1 = width / 2;
  let y1 = 0;

  let x2 = width / 2 + oscillation; // Oscillating control point
  let y2 = height / 3;

  let x3 = width / 2 - oscillation; // Oscillating control point
  let y3 = (2 * height) / 3;

  let x4 = width / 2;
  let y4 = height;

  // Draw the Bezier curve
  bezier(x1, y1, x2, y2, x3, y3, x4, y4);
}

function keyPressed() {
  if (key === '1') {
    frequency = 0.1; // Slow oscillation
  }
  if (key === '2') {
    frequency = 0.2; // Medium oscillation
  }
  if (key === '3') {
    frequency = 0.5; // Fast oscillation
  }
  if (key === '4') {
    frequency = 1; // Very fast oscillation
  }
}

window.setup = setup;
window.draw = draw;
window.keyPressed = keyPressed;
