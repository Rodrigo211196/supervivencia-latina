// ─────────────────────────────────────────
// DATOS POR CATEGORÍA
// ─────────────────────────────────────────
export const CATEGORIAS = [
    {
        id: "oficina",
        nombre: "Situaciones de trabajo",
        id_image: "oficina",
        bgImage: "/images/oficina.png",
        color: "#4d96ff",
        desc: "Sobrevive a la oficina",
        situaciones: [
            {
                id: 1,
                gif: "/images/t1.png",
                gifAlt: "Jefe enojado",
                situacion: "Llegas 2 horas tarde al trabajo y tu jefe te está esperando en la puerta",
                emoji: "⏰",
                opciones: [
                    { texto: "¡El tráfico estaba tan pesado como su mirada.", correcta: true, puntos: 500 },
                    { texto: "\u201CJefe, vine temprano… pero al otro trabajo", correcta: false, puntos: -300, mensajeError: "💀 Te despiden. Ahora tienes mucho tiempo libre para reflexionar" },
                    { texto: "Es una prueba para medir su paciencia.", correcta: false, puntos: -500, mensajeError: "😬 ¡Te dieron una advertencia... esa respuesta  nunca convence!" },
                ],
                respuestaIdeal: "¡El tráfico estaba tan pesado como su mirada.",
                reaccion: "🚗 sobreviviste Tu jefe no entendió nada, pero te dejó pasar."
            },
            {
                id: 2,
                gif: "/images/t2.png",
                gifAlt: "Confundido",
                situacion: "Mandaste el meme del perrito diciendo 'odio este trabajo' al grupo de la oficina… y tu jefe ya puso 'Visto",
                emoji: "😱",
                opciones: [
                    { texto: "¡Ese meme no me representa… fue hackeo emocional.", correcta: false, puntos: -200, mensajeError: "😬 ¡Eso nunca le ha funcionado a nadie en la historia!" },
                    { texto: "¡Era para motivar al equipo!", correcta: true, puntos: 500 },
                    { texto: "¡Fue sin querer!", correcta: false, puntos: -100, mensajeError: "😬 ¡esa repuesta no funciono el jefe no te creyo" },
                ],
                respuestaIdeal: "¡Era para motivar al equipo!",
                reaccion: "💪 ¡sobreviviste Convertiste el error en liderazgo!"
            },
            {
                id: 3,
                gif: "/images/t3.png",
                gifAlt: "Dormido",
                situacion: "Se fue el sistema justo cuando estabas atendiendo a la persona número 73 de la fila… y afuera ya están golpeando la puerta",
                emoji: "😴",
                opciones: [
                    { texto: "Vuelvan mañana, hoy el servidor decidió hacer paro.", correcta: false, puntos: -200, mensajeError: "😓 te gritaron casi linchan" },
                    { texto: "Si no respiran fuerte, capaz vuelve el internet.", correcta: false, puntos: -100, mensajeError: "😓 te graban para TikTok" },
                    { texto: "El sistema no se cayó, está reflexionando.", correcta: true, puntos: 500 },
                ],
                respuestaIdeal: "El sistema no se cayó, está reflexionando.",
                reaccion: "🧠 ¡sobreviviste El sistema estába en actualización temporal, en unos minutos retomaras la atención"
            },
            {
                id: 4,
                gif: "/images/t4.png",
                gifAlt: "Crisis",
                situacion: "Son las 15:58 a.m. y llega alguien diciendo 'solo es una preguntita rápida'",
                emoji: "📊",
                opciones: [
                    { texto: "Las preguntitas rápidas son las más largas.", correcta: false, puntos: -100, mensajeError: "😬 te pusieron la cara de pocos amigos" },
                    { texto: "Si es rápido, entonces mañana le respondo!", correcta: true, puntos: 500 },
                    { texto: "Rápido es relativo en esta institución", correcta: false, puntos: -400, mensajeError: "😬 te volviste un meme" },
                ],
                respuestaIdeal: "Si es rápido, entonces mañana le respondo!",
                reaccion: "📚 ¡sobreviviste lo agendaste a una consulta para mañana y lo atenderas con más detalle"
            },
            {
                id: 5,
                gif: "/images/t5.png",
                gifAlt: "Sorpresa",
                situacion: "El cliente te trae todos los papeles… pero le falta 'una fotocopia simple' que nadie le avisó.",
                emoji: "💰",
                opciones: [
                    { texto: "Aquí el trámite no avanza sin su respectiva fotocopia mística.", correcta: true, puntos: 500 },
                    { texto: "Solo le falta lo más importante.", correcta: false, puntos: -200, mensajeError: "😬 se enciende la discusión" },
                    { texto: "Está completo… pero incompleto", correcta: false, puntos: -500, mensajeError: "😬 se confunde y se molesta" },
                ],
                respuestaIdeal: "Aquí el trámite no avanza sin su respectiva fotocopia mística.",
                reaccion: "🔥 sobreviviste se dio cuenta que es un requisito formal indispensable para continuar el proceso"
            },
        ]
    },
    {
        id: "real",
        nombre: "Situaciones incómodas",
        bgImage: "/images/incomodas.png",
        color: "#ff6b6b",
        desc: "Escapa sin perder dignidad",
        situaciones: [
            {
                id: 1,
                gif: "/images/i1.jpeg",
                gifAlt: "Mamá enojada",
                situacion: "Tu mamá encontró el examen con 0",
                emoji: "📝",
                opciones: [
                    { texto: "¡Fue sin querer!", correcta: false, puntos: -200, mensajeError: "😬 ¡El 0 no es accidente, es dedicación constante." },
                    { texto: "¡No es mío, lo encontré!", correcta: true, puntos: 500 },
                    { texto: "¡Ahorita no joven!", correcta: false, puntos: -100, mensajeError: "😬 ¡No estás en ventanilla pública, estás en juicio familiar" },
                ],
                respuestaIdeal: "¡No es mío, lo encontré!",
                reaccion: "😂 sobreviviste Generaste  duda inmediata y compraste tiempo para elaborar mejor coartada."
            },
            {
                id: 2,
                gif: "/images/i2.jpeg",
                gifAlt: "Nervioso",
                situacion: "Llegaste a las 3am y dijiste que estarías a las 10pm",
                emoji: "🌙",
                opciones: [
                    { texto: "¡Me quedé ayudando a un amigo!", correcta: true, puntos: 500 },
                    { texto: "¡Se me fue el tiempo!", correcta: false, puntos: -300, mensajeError: "😬 El tiempo no se pierde… tú te pierdes con él" },
                    { texto: "¡Ni tan tarde es!", correcta: false, puntos: -500, mensajeError: "😬 Discutir la hora a las 3am es firmar tu sentencia" },
                ],
                respuestaIdeal: "¡Me quedé ayudando a un amigo!",
                reaccion: "💛 Superviviste Apelaste  a valores familiares solidaridad y sacrificio."
            },
            {
                id: 3,
                gif: "/images/i3.png",
                gifAlt: "Problema",
                situacion: "Rompiste el florero de la abuela",
                emoji: "🏺",
                opciones: [
                    { texto: "¡Fue sin querer!", correcta: false, puntos: -100, mensajeError: "😬 Sin querer no paga lo que rompiste" },
                    { texto: "¡Ya estaba roto!", correcta: false, puntos: -200, mensajeError: "😬 Si ya estaba roto… ¿por qué ahora está en el suelo?" },
                    { texto: "¡El gato lo tiró!", correcta: true, puntos: 500 },
                ],
                respuestaIdeal: "¡El gato lo tiró!",
                reaccion: "🐱 sobreviviste Siempre es creíble culpar a un tercero que no puede declarar"
            },
            {
                id: 4,
                gif: "/images/i4.jpeg",
                gifAlt: "Dinero",
                situacion: "Gastaste el dinero del mandado en otra cosa",
                emoji: "💸",
                opciones: [
                    { texto: "¡Me lo robaron!", correcta: false, puntos: -300, mensajeError: "😬 Ahora además del dinero, tienes que inventar un ladrón" },
                    { texto: "¡El precio subió en la tienda!", correcta: true, puntos: 500 },
                    { texto: "¡Ya no me acordaba cuánto era!", correcta: false, puntos: -200, mensajeError: "😬 Olvidar precios no llena la despensa" },
                ],
                respuestaIdeal: "¡El precio subió en la tienda!",
                reaccion: "📈 Sobreviviste Contexto económico siempre es argumento sólido en LATAM"
            },
            {
                id: 5,
                gif: "/images/i5.jpeg",
                gifAlt: "Bronca",
                situacion: "Tu mamá te vio fumando con los amigos",
                emoji: "🚬",
                opciones: [
                    { texto: "¡Era de ellos, yo no estaba fumando!", correcta: false, puntos: -100, mensajeError: "😬 Estar en la escena ya te hace sospechoso" },
                    { texto: "¡Era vapor de mi boca por el frío!", correcta: true, puntos: 500 },
                    { texto: "¡Solo fue una vez!", correcta: false, puntos: -400, mensajeError: "😬 Confesión parcial sigue siendo confesión" },
                ],
                respuestaIdeal: "¡Era vapor de mi boca por el frío!",
                reaccion: "❄️ Sobreviviste Negación creativa inmediata, mantiene margen de duda"
            },
        ]
    },
    {
        id: "colegio",
        nombre: "Colegio Público",
        bgImage: "/images/colegio.jpeg",
        color: "#6bcb77",
        desc: "Maestros, tareas y supervivencia escolar",
        situaciones: [
            {
                id: 1,
                gif: "/images/e1.jpeg",
                gifAlt: "Maestro",
                situacion: "El profe te pregunta la tarea y no la hiciste",
                emoji: "📚",
                opciones: [
                    { texto: "¡Se la presté a un compañero!", correcta: false, puntos: -200, mensajeError: "😬  Mala estrategia. Ahora tienes cero y tu compañero también." },
                    { texto: "¡Cuál tarea?!", correcta: false, puntos: -500, mensajeError: "😬 Negación nivel experto… lástima que el profe tiene pruebas." },
                    { texto: "¡Se me mojó con la lluvia de ayer!", correcta: true, puntos: 500 },
                ],
                respuestaIdeal: "¡Se me mojó con la lluvia de ayer!",
                reaccion: "🌧️ Sobreviviste Activaste el modo víctima climática con responsibility moderada"
            },
            {
                id: 2,
                gif: "/images/e2.jpeg",
                gifAlt: "Trampa",
                situacion: "Te pescaron copiando en el examen",
                emoji: "👀",
                opciones: [
                    { texto: "¡Solo revisaba mi propio examen!", correcta: true, puntos: 500 },
                    { texto: "¡Fue coincidencia las respuestas!", correcta: false, puntos: -100, mensajeError: "😬 Coincidencia… hasta en los errores ortográficos." },
                    { texto: "¡Él me copió a mí!", correcta: false, puntos: -200, mensajeError: "😬 Ahora los dos están en dirección. Felicidades." },
                ],
                respuestaIdeal: "¡Solo revisaba mi propio examen!",
                reaccion: "🔍 Sobreviviste Defensa técnica activada. No admites culpa, mantienes postura firme."
            },
            {
                id: 3,
                gif: "/images/e3.jpeg",
                gifAlt: "Tardanza",
                situacion: "Llegaste tarde y el profe te cerró la puerta",
                emoji: "🚪",
                opciones: [
                    { texto: "¡Me dormí en el baño!", correcta: false, puntos: -300, mensajeError: "😬 Eso explica mucho… pero no te salva." },
                    { texto: "¡El camión se tardó!!", correcta: false, puntos: -100, mensajeError: "😬 El transporte público ya no puede cargar con tus decisiones." },
                    { texto: "¡Venía de entregar la tarea a secretaría!", correcta: true, puntos: 500 },
                ],
                respuestaIdeal: "¡Venía de entregar la tarea a secretaría!",
                reaccion: "📋 Sobreviviste Justificación académica. Demuestras responsabilidad, reduces sospecha."
            },
            {
                id: 4,
                gif: "/images/e4.png",
                gifAlt: "Pelea",
                situacion: "Te mandaron a dirección por pelear en el recreo",
                emoji: "👊",
                opciones: [
                    { texto: "¡Estaba practicando defensa personal!", correcta: true, puntos: 500 },
                    { texto: "¡Él empezó!", correcta: false, puntos: -200, mensajeError: "😬 Argumento clásico de primaria. No escala bien ante adultos." },
                    { texto: "¡Solo jugábamos!!", correcta: false, puntos: -100, mensajeError: "😬 Si era juego… ¿por qué hay reporte firmado?" },
                ],
                respuestaIdeal: "¡Estaba practicando defensa personal!",
                reaccion: "🥋 Sobreviviste Reformulaste agresión en actividad extracurricular. Movimiento inteligente."
            },
            {
                id: 5,
                gif: "/images/e5.png",
                gifAlt: "Teléfono",
                situacion: "El profe te quitó el celular en clase",
                emoji: "📱",
                opciones: [
                    { texto: "¡Era una emergencia familiar!", correcta: false, puntos: -100, mensajeError: "😬 Ahora el profe quiere llamar a tu casa para confirmar." },
                    { texto: "¡Buscaba info del tema en Google!", correcta: true, puntos: 500 },
                    { texto: "¡Solo lo tenía en la mano!", correcta: false, puntos: -300, mensajeError: "😬 Exacto. Y por eso mismo te lo quitaron." },
                ],
                respuestaIdeal: "¡Buscaba info del tema en Google!",
                reaccion: "🔍 Sobreviviste Uso académico del dispositivo. Narrativa alineada con aprendizaje."
            },
        ]
    },
    {
        id: "barrio",
        nombre: "Situaciones de Barrio",
        bgImage: "/images/barrio.jpeg",
        color: "#f59e0b",
        desc: "El barrio tiene sus propias reglas",
        situaciones: [
            {
                id: 1,
                gif: "/images/b1.jpeg",
                gifAlt: "Vecina",
                situacion: "La vecina te vio tirar la basura en su puerta",
                emoji: "🗑️",
                opciones: [
                    { texto: "¡Me equivoqué de puerta!", correcta: true, puntos: 500 },
                    { texto: "¡No fui yo!", correcta: false, puntos: -400, mensajeError: "😬 Negación nivel cámara de seguridad HD." },
                    { texto: "¡El viento la movió!", correcta: false, puntos: -100, mensajeError: "😬 El viento ahora también abre bolsas y las acomoda perfecto." },
                ],
                respuestaIdeal: "¡Me equivoqué de puerta!",
                reaccion: "🗺️ Sobreviviste Error humano aceptado. Activas el modo vecino despistado, no enemigo declarado."
            },
            {
                id: 2,
                gif: "/images/b2.jpeg",
                gifAlt: "Fiesta",
                situacion: "Tu música a las 2am despertó a todo el edificio",
                emoji: "🎶",
                opciones: [
                    { texto: "¡No sabía que era tarde!!", correcta: false, puntos: -300, mensajeError: "😬 Son las 2am. El reloj también está decepcionado." },
                    { texto: "¡Solo una canción!", correcta: false, puntos: -200, mensajeError: "😬 Sí… repetida 17 veces con bajo en modo terremoto." },
                    { texto: "¡Era el cumpleaños de mi abuela!", correcta: true, puntos: 500 },
                ],
                respuestaIdeal: "¡Era el cumpleaños de mi abuela!",
                reaccion: "🎂 Sobreviviste Nadie quiere ser el villano de una abuela."
            },
            {
                id: 3,
                gif: "/images/b3.jpeg",
                gifAlt: "Balón",
                situacion: "Tu pelota rompió la ventana del vecino bravo",
                emoji: "⚽",
                opciones: [
                    { texto: "¡Yo no estaba jugando!", correcta: false, puntos: -400, mensajeError: "😬  Claro… la pelota se lanzó sola buscando libertad." },
                    { texto: "¡Fue el viento que cambió la trayectoria!", correcta: true, puntos: 500 },
                    { texto: "¡Ya estaba rota!", correcta: false, puntos: -100, mensajeError: "😬 Ahora también eres perito en vidrios, según tú" },
                ],
                respuestaIdeal: "¡Fue el viento que cambió la trayectoria!",
                reaccion: "🌬️ Sobreviviste Culpas a la física. Técnica arriesgada pero científicamente defendible."
            },
            {
                id: 4,
                gif: "/images/b4.png",
                gifAlt: "Perro",
                situacion: "Tu perro hizo sus necesidades en el jardín del vecino",
                emoji: "🐶",
                opciones: [
                    { texto: "¡Él fue solo, se me escapó!", correcta: false, puntos: -100, mensajeError: "😬 El perro no tiene llaves ni plan estratégico." },
                    { texto: "¡Abónelo, es fertilizante gratis!", correcta: false, puntos: -500, mensajeError: "😬 Intentaste venderle el problema. Mala jugada diplomática." },
                    { texto: "¡Pensé que era área común!", correcta: true, puntos: 500 },
                ],
                respuestaIdeal: "¡Pensé que era área común!",
                reaccion: "🌿 Sobreviviste Confusión territorial leve. Mantienes tono inocente y reduces tensión."
            },
            {
                id: 5,
                gif: "/images/b5.png",
                gifAlt: "Parking",
                situacion: "Estacionaste en el lugar 'no oficial' del vecino",
                emoji: "🚗",
                opciones: [
                    { texto: "¡No vi el ladrillo que lo marcaba!", correcta: true, puntos: 500 },
                    { texto: "¡Es la calle, es de todos!", correcta: false, puntos: -400, mensajeError: "😬 Discurso revolucionario… frente al vecino más territorial del barrio." },
                    { texto: "¡Solo fue un momento!", correcta: false, puntos: -200, mensajeError: "😬 El clásico ‘un momento’ que duró una siesta completa." },
                ],
                respuestaIdeal: "¡No vi el ladrillo que lo marcaba!",
                reaccion: "🧱 Sobreviviste Defensa visual válida. Alegas señalización poco profesional."
            },
        ]
    },
    {
        id: "uni",
        nombre: "Vida Universitaria",
        bgImage: "/images/universidad.jpeg",
        color: "#a78bfa",
        desc: "Sobrevive a la universidad",
        situaciones: [
            {
                id: 1,
                gif: "/images/u1.jpeg",
                gifAlt: "Estudiante",
                situacion: "Entregaste el trabajo final 3 días tarde",
                emoji: "📄",
                opciones: [
                    { texto: "¡No sabía la fecha!", correcta: false, puntos: -400, mensajeError: "😬 El calendario existe. Y el aula virtual también." },
                    { texto: "¡Se me borró el archivo a las 11:59pm!", correcta: true, puntos: 500 },
                    { texto: "¡Lo entregué antes, revise el correo!", correcta: false, puntos: -100, mensajeError: "😬 El profe ya revisó… y tu correo está más vacío que tu carpeta de entregas." },
                ],
                respuestaIdeal: "¡Se me borró el archivo a las 11:59pm!",
                reaccion: "💻 Sobreviviste Genera empatía digital y mantiene margen de negociación."
            },
            {
                id: 2,
                gif: "/images/u2.jpeg",
                gifAlt: "Parcial",
                situacion: "Reprobaste el parcial y necesitas hablar con el profe",
                emoji: "📉",
                opciones: [
                    { texto: "¡Tuve una emergencia familiar ese día!", correcta: false, puntos: -100, mensajeError: "😬 Emergencia estratégica detectada después de ver la nota." },
                    { texto: "¡Creo que hubo un error al calificar!", correcta: false, puntos: -200, mensajeError: "😬 Revisaron… y el único error fue confiar en tu estudio." },
                    { texto: "¡Estoy teniendo problemas de salud mental y quiero mejorar!", correcta: true, puntos: 500 },
                ],
                respuestaIdeal: "¡ estoy teniendo problemas de salud mental!",
                reaccion: "💜 Sobreviviste Honestidad responsable. Muestras vulnerabilidad y compromiso de mejora."
            },
            {
                id: 3,
                gif: "/images/u3.png",
                gifAlt: "Plagio",
                situacion: "Te detectaron plagio en la tesis",
                emoji: "🔎",
                opciones: [
                    { texto: "¡Cité mal sin querer, es un error de formato!", correcta: true, puntos: 500 },
                    { texto: "¡El sistema de detección está mal!", correcta: false, puntos: -300, mensajeError: "😬 Sí claro… y justo marcó 87% de coincidencia por casualidad." },
                    { texto: "¡Todos lo hacen!", correcta: false, puntos: -500, mensajeError: "😬 Argumento colectivo. Suspensión individual." },
                ],
                respuestaIdeal: "¡Cité mal sin querer, es un error de formato!",
                reaccion: "Sobreviviste Admitiste falla técnica, no intención. Posible oportunidad de corrección."
            },
            {
                id: 4,
                gif: "/images/u4.jpeg",
                gifAlt: "Borracho",
                situacion: "Llegaste borracho a la exposicion del proyecto",
                emoji: "🍺",
                opciones: [
                    { texto: "¡Solo tomé una cerveza para los nervios!", correcta: false, puntos: -400, mensajeError: "😬 El problema es que los nervios eran 12." },
                    { texto: "¡Fue el calor!", correcta: false, puntos: -100, mensajeError: "😬 El calor no huele a cerveza" },
                    { texto: "¡Tengo reacción alérgica a los nervios!", correcta: true, puntos: 500 },
                ],
                respuestaIdeal: "¡Tengo reacción alérgica a los nervios!",
                reaccion: "😵 Explicación médica ambigua. Genera duda suficiente para sobrevivir."
            },
            {
                id: 5,
                gif: "/images/u5.jpeg",
                gifAlt: "Faltar",
                situacion: "Faltaste al 60% de las clases y necesitas el aval del profe",
                emoji: "🏃",
                opciones: [
                    { texto: "¡Estuve trabajando para pagar la carrera!", correcta: true, puntos: 500 },
                    { texto: "¡Estudié por mi cuenta todo!", correcta: false, puntos: -100, mensajeError: "😬 Interesante… pero la asistencia no era opcional." },
                    { texto: "¡Sus clases estaban en YouTube!", correcta: false, puntos: -500, mensajeError: "😬 Ahora además cuestionas su presencialidad. Movimiento peligroso." },
                ],
                respuestaIdeal: "¡Estuve trabajando para pagar la carrera!",
                reaccion: "💪 Sobreviviste Justificación de esfuerzo y responsabilidad económica. Activa empatía académica."
            },
        ]
    },
];

export const NIVELES = [
    { min: 0, max: 999, label: "Sobreviviente Novato 🥚", color: "#94a3b8" },
    { min: 1000, max: 2499, label: "Sobreviviente intermedio 🥈", color: "#f97316" },
    { min: 2500, max: 3999, label: "Manipulador Profesional 🎭", color: "#8b5cf6" },
    { min: 4000, max: 99999, label: "Maestro del Caos👑", color: "#f59e0b" },
];
