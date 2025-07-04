const email = "nobleststriver@icloud.com";
const discord = "cebreros";

function copyToClipboard(type) {
  const text = type === "email" ? email : discord;
  const element = document.getElementById(type + "-btn");

  const textarea = document.createElement("textarea");
  textarea.value = text;
  textarea.setAttribute("readonly", "");
  textarea.style.position = "absolute";
  textarea.style.left = "-9999px";
  document.body.appendChild(textarea);
  textarea.select();
  try {
    const successful = document.execCommand("copy");
    if (successful) {
      showCopied(element, type);
    }
  } catch (err) {
    console.error("Fallback: Unable to copy", err);
  }
  document.body.removeChild(textarea);
}

function showCopied(element, type) {
  const original = element.textContent;
  element.textContent = "copiado";
  element.style.color = "#000";
  setTimeout(() => {
    element.textContent = original;
    element.style.color = "#ff000b";
  }, 1500);
}
