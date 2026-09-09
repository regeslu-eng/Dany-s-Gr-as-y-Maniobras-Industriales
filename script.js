const PHONE='524421122573';
const messages={
 general:"Hola Dany's, quiero cotizar un servicio de grúas o maniobras industriales en Querétaro. ¿Me pueden apoyar con disponibilidad y cotización?",
 titan:"Hola Dany's, quiero cotizar la Grúa Titán de 14 TN. Necesito apoyo con disponibilidad, maniobra y costo. Ubicación: [pendiente]. Fecha: [pendiente].",
 montacargas:"Hola Dany's, quiero cotizar un MONTACARGAS de 3 a 14 TN. Necesito apoyo con disponibilidad, capacidad, operador (por definir) y costo. Ubicación: [pendiente]. Fecha: [pendiente].",
 articulada:"Hola Dany's, quiero cotizar una PLATAFORMA ARTICULADA de 10 a 28 m. Necesito apoyo con disponibilidad y costo. Altura requerida: [pendiente]. Ubicación: [pendiente]. Fecha: [pendiente].",
 tijera:"Hola Dany's, quiero cotizar una PLATAFORMA TIJERA de 8 a 13 m. Necesito apoyo con disponibilidad y costo. Altura requerida: [pendiente]. Ubicación: [pendiente]. Fecha: [pendiente].",
 maniobra:"Hola Dany's, quiero cotizar MANIOBRAS DE PISO para movimiento y posicionamiento de maquinaria. Ubicación: [pendiente]. Fecha: [pendiente]. Descripción de la maniobra: [pendiente].",
 traslado:"Hola Dany's, quiero cotizar un TRASLADO EN RAMPA HIDRÁULICA para maquinaria. Equipo a trasladar: [pendiente]. Origen: [pendiente]. Destino: [pendiente]. Fecha: [pendiente]."
};
function openWA(key,text){const msg=text||messages[key]||messages.general; window.open(`https://wa.me/${PHONE}?text=${encodeURIComponent(msg)}`,'_blank','noopener'); const toast=document.getElementById('toast'); if(toast){toast.classList.add('show');setTimeout(()=>toast.classList.remove('show'),2200)}}
document.querySelectorAll('[data-wa]').forEach(el=>el.addEventListener('click',e=>{e.preventDefault();openWA(el.dataset.wa)}));
const menuBtn=document.getElementById('menuBtn'),nav=document.getElementById('navLinks');
menuBtn?.addEventListener('click',()=>{const open=nav.classList.toggle('open');menuBtn.setAttribute('aria-expanded',open?'true':'false')});
nav?.querySelectorAll('a').forEach(a=>a.addEventListener('click',()=>nav.classList.remove('open')));
document.getElementById('year').textContent=new Date().getFullYear();
document.getElementById('quoteForm')?.addEventListener('submit',e=>{e.preventDefault();const d=new FormData(e.currentTarget);const msg=`Hola Dany's, quiero solicitar una COTIZACIÓN.\n\nEquipo/servicio: ${d.get('equipo')}\nUbicación: ${d.get('ubicacion')}\nFecha estimada: ${d.get('fecha')||'Por definir'}\nCapacidad/altura: ${d.get('capacidad')||'Por definir'}\n¿Con operador?: ${d.get('operador')}\nQué necesito mover/cargar/elevar: ${d.get('detalle')||'Por definir'}\nNombre o empresa: ${d.get('nombre')}\n\nEnviado desde el sitio web de Dany's.`;openWA('general',msg)});
