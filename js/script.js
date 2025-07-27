const email = "nobleststriver@icloud.com";
const discord = "cebreros";

function toggleDropdown(id) {
  const allDropdowns = document.querySelectorAll(".footer-dropdown-content");
  allDropdowns.forEach((dropdown) => {
    if (dropdown.id !== id) {
      dropdown.classList.remove("active");
    }
  });

  const targetDropdown = document.getElementById(id);
  targetDropdown.classList.toggle("active");
}

function copyToClipboard(type) {
  const text = type === "email" ? email : discord;
  const elements = document.querySelectorAll(".copy-btn");
  let element = null;

  elements.forEach((btn) => {
    if (btn.textContent.trim() === "correo" && type === "email") {
      element = btn;
    } else if (btn.textContent.trim() === "discord" && type === "discord") {
      element = btn;
    }
  });

  if (!element) return;

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
  element.style.color = "#ff000b";
  element.style.textShadow = "0 0 5px #ff000b";
  setTimeout(() => {
    element.textContent = original;
    element.style.color = "#666666";
    element.style.textShadow =
      "0 0 5px #666666, 0 0 10px #666666, 0 0 20px #666666";
  }, 1500);
}
