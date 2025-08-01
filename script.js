function drawStage() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);

  // Draw clones
  clones.forEach(c => ctx.drawImage(spriteImage, c.x, c.y, 48, 48));

  // Draw main sprite
  ctx.drawImage(spriteImage, spriteX, spriteY, 48, 48);

  // Draw speech bubble if any
  if (speechText) {
    ctx.font = "16px sans-serif";
    const w = ctx.measureText(speechText).width;
    ctx.fillStyle = "white";
    ctx.fillRect(spriteX, spriteY - 30, w + 10, 24);
    ctx.strokeStyle = "black";
    ctx.strokeRect(spriteX, spriteY - 30, w + 10, 24);
    ctx.fillStyle = "black";
    ctx.fillText(speechText, spriteX + 5, spriteY - 13);
  }

  // Draw pen trail dot if down
  if (penDown) {
    ctx.fillStyle = penColor;
    ctx.fillRect(spriteX + 20, spriteY + 20, 2, 2);
  }
}
