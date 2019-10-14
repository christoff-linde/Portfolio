let spam_message_container = document.getElementById("spam_message_container");
let firefox_monitor_container = document.getElementById("firefox_monitor");

firefox_monitor_container.addEventListener("mouseenter", hover_in);
firefox_monitor_container.addEventListener("mouseleave", hover_out);
firefox_monitor_container.addEventListener("click", open_firefox_monitor);

function hover_in() {
   console.log("mouseenter");
   firefox_monitor_container.style.cursor = "pointer"
}

function hover_out() {
   console.log("mouseleave");
}

function open_firefox_monitor() {
   window.open('https://monitor.firefox.com/', '_blank');
}