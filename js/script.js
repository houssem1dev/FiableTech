const logs = [
"🔍 Scanning port 22... Status: Secure",
"🔍 Scanning port 80... Status: Secure",
"🔍 Scanning port 443... Status: Secure",
"⚠️ SQL Injection detected - Blocked",
"🛡️ Firewall blocked unauthorized access attempt",
"🔍 Malware signature detected - Quarantined",
"🚫 Unauthorized login attempt from IP 192.168.1.100",
"⚠️ DDOS traffic detected - Mitigated",
"✅ Security patch applied successfully",
"🔍 Vulnerability scan completed - 0 critical issues",
"🛡️ Intrusion detection system activated",
"📊 Log analysis: Normal activity patterns detected",
"🔄 Automated backup verification completed",
"🛡️ Zero-day threat signature updated",
"✅ Compliance check passed - All systems green"
]

let i = 0
let isPaused = false
let logInterval

function showLog(){
if(!isPaused && i < logs.length){
const logBox = document.getElementById("logs")
const logEntry = document.createElement("div")
logEntry.innerHTML = `<span class="timestamp">[${new Date().toLocaleTimeString()}]</span> ${logs[i]}`
logEntry.style.opacity = "0"
logEntry.style.transform = "translateX(-20px)"
logEntry.style.transition = "all 0.5s ease"

logBox.appendChild(logEntry)

// Trigger animation
setTimeout(() => {
logEntry.style.opacity = "1"
logEntry.style.transform = "translateX(0)"
}, 10)

logBox.scrollTop = logBox.scrollHeight
i++

if(i >= logs.length) i = 0 // Loop back to start
}
}

function startLogging(){
logInterval = setInterval(showLog, 2000)
}

function pauseLogging(){
isPaused = !isPaused
const pauseBtn = document.getElementById("pause-btn")
pauseBtn.textContent = isPaused ? "Resume" : "Pause"
}

function clearLogs(){
const logBox = document.getElementById("logs")
logBox.innerHTML = ""
}

// Initialize logging
startLogging()

// Event listeners
document.getElementById("pause-btn").addEventListener("click", pauseLogging)
document.getElementById("clear-btn").addEventListener("click", clearLogs)

// Animate stats counters
function animateCounter(element, target) {
let current = 0
const increment = target / 100
const timer = setInterval(() => {
current += increment
element.textContent = Math.floor(current).toLocaleString()
if (current >= target) {
element.textContent = target.toLocaleString()
clearInterval(timer)
}
}, 20)
}

// Animate stats on page load
document.addEventListener("DOMContentLoaded", () => {
const totalThreats = document.getElementById("total-threats")
animateCounter(totalThreats, 1247)
})

// Enhanced Chart
const ctx = document.getElementById('attackChart')

new Chart(ctx, {
type: 'doughnut',
data: {
labels: ['SQL Injection','Malware','DDOS','Brute Force','XSS','CSRF'],
datasets: [{
label: 'Detected Attacks',
data: [12, 19, 15, 7, 8, 5],
backgroundColor: [
'rgba(255, 99, 132, 0.8)',
'rgba(54, 162, 235, 0.8)',
'rgba(255, 205, 86, 0.8)',
'rgba(75, 192, 192, 0.8)',
'rgba(153, 102, 255, 0.8)',
'rgba(255, 159, 64, 0.8)'
],
borderColor: [
'rgba(255, 99, 132, 1)',
'rgba(54, 162, 235, 1)',
'rgba(255, 205, 86, 1)',
'rgba(75, 192, 192, 1)',
'rgba(153, 102, 255, 1)',
'rgba(255, 159, 64, 1)'
],
borderWidth: 2
}]
},
options: {
responsive: true,
plugins: {
legend: {
labels: {
color: '#ffffff',
font: {
family: 'Rajdhani',
size: 12
}
}
}
},
scales: {
r: {
ticks: {
color: '#b0b0b0'
},
grid: {
color: 'rgba(255, 255, 255, 0.1)'
}
}
}
}
})