const mrWeekdays=['रविवार','सोमवार','मंगळवार','बुधवार','गुरुवार','शुक्रवार','शनिवार'];
const mrMonths=['जानेवारी','फेब्रुवारी','मार्च','एप्रिल','मे','जून','जुलै','ऑगस्ट','सप्टेंबर','ऑक्टोबर','नोव्हेंबर','डिसेंबर'];
function devDigits(v){return String(v).replace(/\d/g,d=>'०१२३४५६७८९'[d]);}
function marathiDate(date=new Date()){return `${mrWeekdays[date.getDay()]}, ${devDigits(date.getDate())} ${mrMonths[date.getMonth()]} ${devDigits(date.getFullYear())}`;}
function setDates(){document.querySelectorAll('[data-current-date]').forEach(el=>el.textContent=marathiDate());}
function copyLink(){navigator.clipboard?.writeText(location.href).then(()=>alert('लिंक कॉपी झाला आहे.')).catch(()=>{});}
function shareNews(){if(navigator.share){navigator.share({title:document.title,url:location.href}).catch(()=>{});}else copyLink();}
function toggleSearch(){document.querySelector('.searchbox')?.classList.toggle('show');document.querySelector('.searchbox input')?.focus();}
document.addEventListener('DOMContentLoaded',setDates);