let canvasSize = 400;

function setup() {
  createCanvas(800, 600);
  noFill();
  textAlign(CENTER, CENTER);
  textSize(16);
}

function draw() {
  background(255);

  let hr = hour();
  let min = minute();
  let sec = second();

  // Define base radius for scaling
  let maxMinuteRadius = canvasSize / 2 - 40; // Radius for 60-second/minute marking
  let maxHourRadius = maxMinuteRadius * (24 / 60); // Radius for 24-hour marking

  // Map hours, minutes, and seconds to circle radii
  let hourRadius = map(hr % 24, 0, 24, 0, maxHourRadius);
  let minuteRadius = map(min, 0, 59, 0, maxMinuteRadius);
  let secondRadius = map(sec, 0, 59, 0, maxMinuteRadius);
  noFill()

  // Hour circle
  stroke(255, 0, 0); // red outline
  strokeWeight(6); // thickest outline
  ellipse(width / 2, height / 2, hourRadius * 2);

  // Minute circle
  stroke(0, 0, 255); // blue outline
  strokeWeight(3); // medium thickness for outline
  ellipse(width / 2, height / 2, minuteRadius * 2);

  // Second circle
  stroke(0); // lack outline
  strokeWeight(1); // thinnest outline
  ellipse(width / 2, height / 2, secondRadius * 2);

  // 24 hour marking circle
  stroke(200);
  strokeWeight(1);
  ellipse(width / 2, height / 2, maxHourRadius * 2); 
  noFill();
  fill(200);
  noStroke();
  text("24", width / 2, height / 2 - maxHourRadius - 10);

  // 60 minute/second marking circle
  stroke(200); 
  noFill();
  ellipse(width / 2, height / 2, maxMinuteRadius * 2);
  fill(200);
  noStroke();
  text("60", width / 2, height / 2 - maxMinuteRadius - 10);

  // Logging minute to console every minute
  if (sec === 0) {
    console.log("Minute: " + min);
  }
}
