const email = "nobleststriver@icloud.com";
const discord = "cebreros";

function copyToClipboard(type) {
  const text = type === "email" ? email : discord;
  const btn = document.querySelector(
    `.copy-btn[onclick="copyToClipboard('${type}')"]`
  );
  const originalText = btn.textContent;
  navigator.clipboard.writeText(text).then(() => {
    btn.textContent = "copiado";
    btn.style.color = "#800000";
    btn.style.textShadow =
      "0 0 5px #800000, 0 0 10px #800000, 0 0 20px #800000";

    setTimeout(() => {
      btn.textContent = originalText;
      btn.style.color = "#ff000b";
      btn.style.textShadow =
        "0 0 5px #ff000b, 0 0 10px #ff000b, 0 0 20px #ff000b";
    }, 2000);
  });
}
