const CARDS = 
[
  {
    "id": 1,
    "num": "1",
    "es": {
      "region": "🦴 CERVICAL",
      "name": "Rot. columna vertebral cervical",
      "category": "Movilidad cervical",
      "posPatient": "Sentado relajado, brazos paralelos al tronco, manos sobre rodillas.",
      "posTherapist": "De pie detrás (finta doble). Manos a ambos lados de la cabeza.",
      "execution": "Rotación pasiva máxima a izquierda y derecha sin forzar.",
      "interpretation": "✅ Tope seco + asimetría → alteración cervical (localización según momento del arco). ⚠️ Mareos/nistagmo → descartar causa vascular o vestibular."
    },
    "fr": {
      "region": "🦴 CERVICAL",
      "name": "Rot. colonne vertébrale cervicale",
      "category": "Mobilité cervicale",
      "posPatient": "Assis détendu, bras parallèles au tronc, mains sur les genoux.",
      "posTherapist": "Debout derrière (fente double). Mains de chaque côté de la tête.",
      "execution": "Rotation passive maximale à gauche et à droite sans forcer.",
      "interpretation": "✅ Butée sèche + asymétrie → altération cervicale (localisation selon le moment de l'arc). ⚠️ Étourdissements/nystagmus → écarter une cause vasculaire ou vestibulaire."
    },
    "en": {
      "region": "🦴 CERVICAL",
      "name": "Cervical spine rotation",
      "category": "Cervical mobility",
      "posPatient": "Seated relaxed, arms parallel to the trunk, hands on knees.",
      "posTherapist": "Standing behind (double lunge). Hands on both sides of the head.",
      "execution": "Maximum passive rotation to the left and right without forcing.",
      "interpretation": "✅ Hard end-feel + asymmetry → cervical alteration (localization depending on the point in the arc). ⚠️ Dizziness/nystagmus → rule out vascular or vestibular cause."
    },
    "image": "images/Prueba de rotación de la columna vertebral cervical.webp"
  },
  {
    "id": 2,
    "num": "2",
    "es": {
      "region": "🦴 CERVICAL",
      "name": "Rot. cabeza en extensión máxima",
      "category": "Movilidad cervical",
      "posPatient": "Sentado relajado, brazos a lo largo del tronco, manos sobre piernas.",
      "posTherapist": "De pie lateral (finta doble). Mano posterior en occipucio; mano anterior en mentón.",
      "execution": "1. Extensión pasiva cervical máxima (bloquea segmento cervical alto).\n2. Manteniendo extensión → rotación a cada lado.\n(La rotación se realiza solo con cervical baja, zona cervicotorácica y dorsal alta.)",
      "interpretation": "✅ Dolor + limitación en rotación con cuello en extensión → artrosis/degeneración cervical media-baja o torácica alta."
    },
    "fr": {
      "region": "🦴 CERVICAL",
      "name": "Rot. de la tête en extension maximale",
      "category": "Mobilité cervicale",
      "posPatient": "Assis détendu, bras le long du tronc, mains sur les jambes.",
      "posTherapist": "Debout sur le côté (fente double). Main postérieure sur l'occiput ; main antérieure sur le menton.",
      "execution": "1. Extension passive cervicale maximale (bloque le segment cervical supérieur).\n2. En maintenant l'extension → rotation de chaque côté.\n(La rotation s'effectue uniquement avec le rachis cervical inférieur, la zone cervico-thoracique et dorsale haute.)",
      "interpretation": "✅ Douleur + limitation en rotation avec le cou en extension → arthrose/dégénérescence cervicale moyenne-basse ou thoracique haute."
    },
    "en": {
      "region": "🦴 CERVICAL",
      "name": "Head rotation in maximum extension",
      "category": "Cervical mobility",
      "posPatient": "Seated relaxed, arms along the trunk, hands on legs.",
      "posTherapist": "Standing to the side (double lunge). Posterior hand on the occiput; anterior hand on the chin.",
      "execution": "1. Maximum passive cervical extension (locks the upper cervical segment).\n2. Maintaining extension → rotation to each side.\n(Rotation occurs only with the lower cervical spine, cervicothoracic zone, and upper thoracic spine.)",
      "interpretation": "✅ Pain + limitation in rotation with neck in extension → mid-lower cervical or upper thoracic osteoarthritis/degeneration."
    },
    "image": "images/Prueba de rotación de la cabeza en extension máxima.webp"
  },
  {
    "id": 3,
    "num": "3",
    "es": {
      "region": "🦴 CERVICAL",
      "name": "Rot. cabeza en flexión máxima",
      "category": "Movilidad cervical",
      "posPatient": "Sentado relajado, brazos a lo largo del tronco, manos sobre piernas.",
      "posTherapist": "De pie lateral (finta doble). Mano posterior en occipucio; mano anterior en mentón.",
      "execution": "1. Flexión pasiva cervical máxima (bloquea segmento cervical por debajo de D2).\n2. Manteniendo flexión → rotación a cada lado.\n(Rotación solo con cervical alta: occipucio, atlas, axis.)",
      "interpretation": "✅ Dolor + limitación en rotación con cuello en flexión → alteración degenerativa cervical alta (occipucio, atlas, axis)."
    },
    "fr": {
      "region": "🦴 CERVICAL",
      "name": "Rot. de la tête en flexion maximale",
      "category": "Mobilité cervicale",
      "posPatient": "Assis détendu, bras le long du tronc, mains sur les jambes.",
      "posTherapist": "Debout sur le côté (fente double). Main postérieure sur l'occiput ; main antérieure sur le menton.",
      "execution": "1. Flexion passive cervicale maximale (bloque le segment cervical en dessous de D2).\n2. En maintenant la flexion → rotation de chaque côté.\n(Rotation uniquement avec le rachis cervical supérieur : occiput, atlas, axis.)",
      "interpretation": "✅ Douleur + limitation en rotation avec le cou en flexion → altération dégénérative cervicale supérieure (occiput, atlas, axis)."
    },
    "en": {
      "region": "🦴 CERVICAL",
      "name": "Head rotation in maximum flexion",
      "category": "Cervical mobility",
      "posPatient": "Seated relaxed, arms along the trunk, hands on legs.",
      "posTherapist": "Standing to the side (double lunge). Posterior hand on the occiput; anterior hand on the chin.",
      "execution": "1. Maximum passive cervical flexion (locks the cervical segment below T2/D2).\n2. Maintaining flexion → rotation to each side.\n(Rotation only with the upper cervical spine: occiput, atlas, axis.)",
      "interpretation": "✅ Pain + limitation in rotation with neck in flexion → upper cervical degenerative alteration (occiput, atlas, axis)."
    },
    "image": "images/Prueba de rotación de la cabeza en flexión máxima.webp"
  },
  {
    "id": 4,
    "num": "4",
    "es": {
      "region": "🦴 CERVICAL",
      "name": "Prueba de distracción cervical",
      "category": "Inestabilidad ligamentosa",
      "posPatient": "Sentado, brazos extendidos a lo largo del tronco, manos sobre muslos, cabeza en posición neutra.\n⚠️ Contraindicada en inestabilidad importante de columna cervical.",
      "posTherapist": "De pie lateral (finta doble). Mano posterior bajo occipucio; mano anterior bajo mandíbula.",
      "execution": "Tracción axial lenta y progresiva hacia el techo de la cabeza del paciente.",
      "interpretation": "✅ Dolor desaparece → atrapamiento radicular. ✅ Dolor aumenta → afectación capsuloligamentosa o musculatura monoarticular."
    },
    "fr": {
      "region": "🦴 CERVICAL",
      "name": "Test de distraction cervicale",
      "category": "Instabilité ligamentaire",
      "posPatient": "Assis, bras étendus le long du tronc, mains sur les cuisses, tête en position neutre.\n⚠️ Contre-indiqué en cas d'instabilité majeure de la colonne cervicale.",
      "posTherapist": "Debout sur le côté (fente double). Main postérieure sous l'occiput ; main antérieure sous la mandibule.",
      "execution": "Traction axiale lente et progressive de la tête du patient vers le haut.",
      "interpretation": "✅ La douleur disparaît → conflit radiculaire. ✅ La douleur augmente → atteinte capsulo-ligamentaire ou musculature monoarticulaire."
    },
    "en": {
      "region": "🦴 CERVICAL",
      "name": "Cervical distraction test",
      "category": "Ligamentous instability",
      "posPatient": "Seated, arms extended along the trunk, hands on thighs, head in neutral position.\n⚠️ Contraindicated in case of significant cervical spine instability.",
      "posTherapist": "Standing to the side (double lunge). Posterior hand under the occiput; anterior hand under the mandible.",
      "execution": "Slow and progressive axial traction of the patient's head toward the ceiling.",
      "interpretation": "✅ Pain disappears → radicular entrapment. ✅ Pain increases → capsuloligamentous involvement or monoarticular musculature."
    },
    "image": "images/Prueba de distracción cervical.webp"
  },
  {
    "id": 5,
    "num": "5",
    "es": {
      "region": "🦴 CERVICAL",
      "name": "Prueba de Sharp-Purser",
      "category": "Inestabilidad ligamentosa",
      "posPatient": "Sedestación, brazos extendidos paralelos al cuerpo, cabeza en posición neutra con cuello en ligera flexión.",
      "posTherapist": "De pie lateral (finta doble), cabeza del paciente a la altura de su pecho. Mano anterior en frontal; mano posterior en occipucio.",
      "execution": "Con la mano anterior → deslizamiento anteroposterior del frontal.\nEsto impone movimiento del occipucio respecto al atlas y del atlas respecto al axis.",
      "interpretation": "✅ Dolor en region cervical → posible inestabilidad atlantoaxial ligamentosa. ⚠️ Test muy inespecífico."
    },
    "fr": {
      "region": "🦴 CERVICAL",
      "name": "Test de Sharp-Purser",
      "category": "Instabilité ligamentaire",
      "posPatient": "Position assise, bras étendus parallèles au corps, tête en position neutre avec le cou en légère flexion.",
      "posTherapist": "Debout sur le côté (fente double), la tête du patient à la hauteur de sa poitrine. Main antérieure sur le front ; main postérieure sur l'occiput.",
      "execution": "Avec la main antérieure → glissement antéro-postérieur du front.\nCela impose un mouvement de l'occiput par rapport à l'atlas et de l'atlas par rapport à l'axis.",
      "interpretation": "✅ Douleur dans la région cervicale → possible instabilité ligamentaire atlanto-axiale. ⚠️ Test très peu spécifique."
    },
    "en": {
      "region": "🦴 CERVICAL",
      "name": "Sharp-Purser test",
      "category": "Ligamentous instability",
      "posPatient": "Seated, arms extended parallel to the body, head in neutral position with the neck in slight flexion.",
      "posTherapist": "Standing to the side (double lunge), patient's head at chest height. Anterior hand on the forehead; posterior hand on the occiput.",
      "execution": "With the anterior hand → anteroposterior glide of the forehead.\nThis forces movement of the occiput relative to the atlas and of the atlas relative to the axis.",
      "interpretation": "✅ Pain in the cervical region → possible atlantoaxial ligamentous instability. ⚠️ Highly non-specific test."
    },
    "image": "images/Prueba de Sharp-Purser.webp"
  },
  {
    "id": 6,
    "num": "6",
    "es": {
      "region": "🦴 CERVICAL",
      "name": "Prueba de percusión de apófisis",
      "category": "Inestabilidad ligamentosa",
      "posPatient": "Sentado, brazos paralelos al tronco, manos sobre muslos.",
      "posTherapist": "De pie lateral (finta doble). Mano anterior sobre frontal (codo estabiliza hombro homolateral); mano posterior libre.",
      "execution": "1. Ligera flexión pasiva de la columna cervical.\n2. Con la mano posterior → percutir con dedos las apófisis espinosas cervicales.",
      "interpretation": "✅ Dolor localizado → fractura/afectación ligamentosa o muscular. ✅ Dolor radicular → afectación de raíces nerviosas."
    },
    "fr": {
      "region": "🦴 CERVICAL",
      "name": "Test de percussion des apophyses",
      "category": "Instabilité ligamentaire",
      "posPatient": "Assis, bras parallèles au tronc, mains sur les cuisses.",
      "posTherapist": "Debout sur le côté (fente double). Main antérieure sur le front (le coude stabilise l'épaule homolatérale) ; main postérieure libre.",
      "execution": "1. Légère flexion passive de la colonne cervicale.\n2. Avec la main postérieure → percuter avec les doigts les apophyses épineuses cervicales.",
      "interpretation": "✅ Douleur localisée → fracture/atteinte ligamentaire ou musculaire. ✅ Douleur radiculaire → atteinte des racines nerveuses."
    },
    "en": {
      "region": "🦴 CERVICAL",
      "name": "Spinous process percussion test",
      "category": "Ligamentous instability",
      "posPatient": "Seated, arms parallel to the trunk, hands on thighs.",
      "posTherapist": "Standing to the side (double lunge). Anterior hand on forehead (elbow stabilizes homolateral shoulder); free posterior hand.",
      "execution": "1. Slight passive flexion of the cervical spine.\n2. With the posterior hand → percuss the cervical spinous processes with fingers.",
      "interpretation": "✅ Localized pain → fracture/ligamentous or muscular involvement. ✅ Radicular pain → nerve root involvement."
    },
    "image": "images/Prueba de percusión de apófisis.webp"
  },
  {
    "id": 7,
    "num": "7",
    "es": {
      "region": "🦴 CERVICAL",
      "name": "Prueba de Jackson (compresión cervical)",
      "category": "Patología discal cervical",
      "posPatient": "Sedestación, brazos extendidos, manos sobre muslos, mirando al frente.",
      "posTherapist": "Bipedestación detrás del paciente (finta doble). Dedos de ambas manos entrelazados sobre la parte superior de la cabeza; codos estabilizan hombros del paciente.",
      "execution": "Compresión axial descendente y progresiva sobre la cabeza.",
      "interpretation": "✅ Dolor cervical con irradiación al brazo → afectación discal o facetaria. ⚡ Sin irradiación → descarta patología discal cervical."
    },
    "fr": {
      "region": "🦴 CERVICAL",
      "name": "Test de Jackson (compression cervicale)",
      "category": "Pathologie discale cervicale",
      "posPatient": "Position assise, bras étendus, mains sur les cuisses, regard vers l'avant.",
      "posTherapist": "Debout derrière le patient (fente double). Doigts des deux mains entrelacés sur le sommet de la tête ; les coudes stabilisent les épaules du patient.",
      "execution": "Compression axiale descendante et progressive sur la tête.",
      "interpretation": "✅ Douleur cervicale avec irradiation dans le bras → atteinte discale ou facettaire. ⚡ Sans irradiation → écarte une pathologie discale cervicale."
    },
    "en": {
      "region": "🦴 CERVICAL",
      "name": "Jackson's test (cervical compression)",
      "category": "Cervical disc pathology",
      "posPatient": "Seated, arms extended, hands on thighs, looking straight ahead.",
      "posTherapist": "Standing behind the patient (double lunge). Fingers of both hands interlaced on top of the head; elbows stabilize the patient's shoulders.",
      "execution": "Downward and progressive axial compression on the head.",
      "interpretation": "✅ Cervical pain radiating to the arm → disc or facet involvement. ⚡ Without radiation → rules out cervical disc pathology."
    },
    "image": "images/Prueba de Jackson o de compresión cervical.webp"
  },
  {
    "id": 8,
    "num": "8",
    "es": {
      "region": "🦴 CERVICAL",
      "name": "Prueba de Spurling (compresión foraminal)",
      "category": "Patología discal cervical",
      "posPatient": "Sentado, brazos a lo largo del cuerpo, manos sobre muslos, cabeza en posición neutra. Paciente RELAJADO.\n⚠️ Precaución en osteoporosis grave o tumores.",
      "posTherapist": "De pie detrás del paciente (finta doble). Una mano plana sobre la parte superior de la cabeza.",
      "execution": "Se realiza en 3 posiciones (según Bradley):\n1. POSICIÓN NEUTRA: golpe seco suave con el puño sobre la mano en el vértex.\n2. EXTENSIÓN cervical: igual.\n3. EXTENSIÓN + ROTACIÓN homolateral: igual.\nCada posición provoca un cierre foraminal progresivo.",
      "interpretation": "✅ Aumento de síntomas → afectación discal o hernia cervical. Distribución del dolor orienta hacia la raíz afectada."
    },
    "fr": {
      "region": "🦴 CERVICAL",
      "name": "Test de Spurling (compression foraminale)",
      "category": "Pathologie discale cervicale",
      "posPatient": "Assis, bras le long du corps, mains sur les cuisses, tête en position neutre. Patient RELAXÉ.\n⚠️ Précaution en cas d'ostéoporose sévère ou de tumeurs.",
      "posTherapist": "Debout derrière le patient (fente double). Une main à plat sur le sommet de la tête.",
      "execution": "Réalisé en 3 positions (selon Bradley) :\n1. POSITION NEUTRE : coup sec et doux avec le poing sur la main placée sur le vertex.\n2. EXTENSION cervicale : identique.\n3. EXTENSION + ROTATION homolatérale : identique.\nChaque position provoque une fermeture foraminale progressive.",
      "interpretation": "✅ Augmentation des symptômes → atteinte discale ou hernie cervicale. La distribution de la douleur oriente vers la racine affectée."
    },
    "en": {
      "region": "🦴 CERVICAL",
      "name": "Spurling's test (foraminal compression)",
      "category": "Cervical disc pathology",
      "posPatient": "Seated, arms along the body, hands on thighs, head in neutral position. Patient RELAXED.\n⚠️ Caution in severe osteoporosis or tumors.",
      "posTherapist": "Standing behind the patient (double lunge). One flat hand on top of the head.",
      "execution": "Performed in 3 positions (according to Bradley):\n1. NEUTRAL POSITION: soft, sharp blow with the fist on the hand over the vertex.\n2. Cervical EXTENSION: same.\n3. EXTENSION + homolateral ROTATION: same.\nEach position causes progressive foraminal closure.",
      "interpretation": "✅ Increased symptoms → disc involvement or cervical hernia. The distribution of pain points toward the affected root."
    },
    "image": "images/Prueba de Spurling o de compresión foraminal.webp"
  },
  {
    "id": 9,
    "num": "9",
    "es": {
      "region": "🦴 CERVICAL",
      "name": "Test de abducción del hombro",
      "category": "Patología discal cervical",
      "posPatient": "Paciente coloca activamente la mano/brazo afectado sobre la cabeza (abducción).",
      "posTherapist": "Observación.",
      "execution": "Paciente eleva el brazo afectado y coloca la mano sobre la cabeza de forma activa.",
      "interpretation": "✅ Alivio o cese de síntomas → compatible con radiculopatía cervical."
    },
    "fr": {
      "region": "🦴 CERVICAL",
      "name": "Test d'abduction de l'épaule",
      "category": "Pathologie discale cervicale",
      "posPatient": "Le patient place activement la main/le bras affecté sur la tête (abduction).",
      "posTherapist": "Observation.",
      "execution": "Le patient lève le bras affecté et place activement la main sur la tête.",
      "interpretation": "✅ Soulagement ou arrêt des symptômes → compatible avec une radiculopathie cervicale."
    },
    "en": {
      "region": "🦴 CERVICAL",
      "name": "Shoulder abduction test",
      "category": "Cervical disc pathology",
      "posPatient": "Patient actively places the affected hand/arm on top of the head (abduction).",
      "posTherapist": "Observation.",
      "execution": "Patient actively raises the affected arm and places the hand on the head.",
      "interpretation": "✅ Relief or cessation of symptoms → compatible with cervical radiculopathy."
    },
    "image": "images/Test de abducción del hombro.webp"
  },
  {
    "id": 10,
    "num": "10",
    "es": {
      "region": "🦴 CERVICAL",
      "name": "Compresión máx. agujero intervertebral",
      "category": "Problema facetario cervical",
      "posPatient": "Sentado, brazos a lo largo del tronco, manos sobre muslos.",
      "posTherapist": "De pie, observando al paciente.",
      "execution": "El paciente realiza ACTIVAMENTE:\nRotación + inclinación lateral del mismo lado + extensión cervical.\n→ Esto implica cierre máximo del agujero de conjunción homolateral.",
      "interpretation": "✅ Dolor local homolateral → imbricación de carillas. ✅ Dolor contralateral → afectación muscular. ✅ Dolor radicular → afectación de raíces nerviosas."
    },
    "fr": {
      "region": "🦴 CERVICAL",
      "name": "Compression max. du trou de conjugaison",
      "category": "Problème facettaire cervical",
      "posPatient": "Assis, bras le long du tronc, mains sur les cuisses.",
      "posTherapist": "Debout, observant le patient.",
      "execution": "Le patient réalise ACTIVEMENT :\nRotation + inclinaison latérale du même côté + extension cervicale.\n→ Cela implique une fermeture maximale du trou de conjugaison homolatéral.",
      "interpretation": "✅ Douleur locale homolatérale → imbrication facettaire. ✅ Douleur contralatérale → atteinte musculaire. ✅ Douleur radiculaire → atteinte des racines nerveuses."
    },
    "en": {
      "region": "🦴 CERVICAL",
      "name": "Max. intervertebral foramen compression",
      "category": "Cervical facet joint problem",
      "posPatient": "Seated, arms along the trunk, hands on thighs.",
      "posTherapist": "Standing, observing the patient.",
      "execution": "The patient ACTIVELY performs:\nRotation + lateral tilt to the same side + cervical extension.\n→ This implies maximum closure of the homolateral intervertebral foramen.",
      "interpretation": "✅ Homolateral local pain → facet joint imbrication. ✅ Contralateral pain → muscular involvement. ✅ Radicular pain → nerve root involvement."
    },
    "image": "images/Prueba de compresión máxima del agujero intervertebral.webp"
  },
  {
    "id": 11,
    "num": "11",
    "es": {
      "region": "🫁 TORÁCICA",
      "name": "Test movilidad segmentaria posteroanterior",
      "category": "Movilidad segmentaria dorsal",
      "posPatient": "Decúbito prono sobre la camilla.",
      "posTherapist": "De pie lateral al paciente.",
      "execution": "Terapeuta aplica presión posteroanterior sobre las apófisis espinosas o costillas dorsales, segmento por segmento, con las manos.",
      "interpretation": "✅ Rigidez o dolor localizado → hipomobilidad segmentaria dorsal. ✅ Hipermobilidad → posible inestabilidad."
    },
    "fr": {
      "region": "🫁 THORACIQUE",
      "name": "Test de mobilité segmentaire postéro-antérieure",
      "category": "Mobilité segmentaire dorsale",
      "posPatient": "Décubitus ventral sur la table.",
      "posTherapist": "Debout sur le côté du patient.",
      "execution": "Le thérapeute applique une pression postéro-antérieure sur les apophyses épineuses ou les côtes dorsales, segment par segment, avec les mains.",
      "interpretation": "✅ Raideur ou douleur localisée → hypomobilité segmentaire dorsale. ✅ Hypermobilité → possible instabilité."
    },
    "en": {
      "region": "🫁 THORACIC",
      "name": "Posteroanterior segmental mobility test",
      "category": "Thoracic segmental mobility",
      "posPatient": "Prone position on the table.",
      "posTherapist": "Standing lateral to the patient.",
      "execution": "Therapist applies posteroanterior pressure on the spinous processes or thoracic ribs, segment by segment, using the hands.",
      "interpretation": "✅ Stiffness or localized pain → thoracic segmental hypomobility. ✅ Hypermobility → possible instability."
    },
    "image": "images/Test de movilidad segmentaria posteroanterior.webp"
  },
  {
    "id": 12,
    "num": "12",
    "es": {
      "region": "🫁 TORÁCICA",
      "name": "Prueba de compresión de costillas",
      "category": "Posible fractura / fisura costal",
      "posPatient": "Sentado, brazos relajados paralelos al tronco, manos sobre muslos.",
      "posTherapist": "De pie detrás del paciente (finta doble). Pasa sus brazos rodeando el tórax y abdomen del paciente por los huecos formados por los brazos; dedos entrelazados en parte anterior del tórax.",
      "execution": "Compresión ANTEROPOSTERIOR y LATERAL con ambos brazos simultáneamente.",
      "interpretation": "✅ Dolor local → restricción costal. ✅ Dolor radicular → neuralgia intercostal. ✅ No aguanta la prueba → posible fractura/fisura costal."
    },
    "fr": {
      "region": "🫁 THORACIQUE",
      "name": "Test de compression des côtes",
      "category": "Possible fracture / fissure costale",
      "posPatient": "Assis, bras relâchés parallèles au tronc, mains sur les cuisses.",
      "posTherapist": "Debout derrière le patient (fente double). Il passe ses bras autour du thorax et de l'abdomen du patient par les espaces formés par les bras ; doigts entrelacés sur la partie antérieure du thorax.",
      "execution": "Compression ANTÉRO-POSTÉRIEURE et LATÉRALE avec les deux bras simultanément.",
      "interpretation": "✅ Douleur locale → restriction costal. ✅ Douleur radiculaire → névralgie intercostale. ✅ Ne supporte pas le test → possible fracture/fissure costale."
    },
    "en": {
      "region": "🫁 THORACIC",
      "name": "Rib compression test",
      "category": "Possible rib fracture / fissure",
      "posPatient": "Seated, relaxed arms parallel to the trunk, hands on thighs.",
      "posTherapist": "Standing behind the patient (double lunge). Passes arms around the patient's thorax and abdomen through the spaces formed by the arms; fingers interlaced on the anterior part of the thorax.",
      "execution": "ANTEROPOSTERIOR and LATERAL compression with both arms simultaneously.",
      "interpretation": "✅ Local pain → rib restriction. ✅ Radicular pain → intercostal neuralgia. ✅ Cannot tolerate the test → possible rib fracture/fissure."
    },
    "image": "images/Prueba de compresión de las costillas.webp"
  },
  {
    "id": 13,
    "num": "13",
    "es": {
      "region": "🫁 TORÁCICA",
      "name": "Signo de Shepelman",
      "category": "Neuropatía / Radiculopatía dorsal",
      "posPatient": "Sedestación, brazos paralelos al tronco, manos reposadas sobre la camilla.",
      "posTherapist": "Bipedestación detrás del paciente (finta doble).",
      "execution": "Terapeuta solicita al paciente que incline el cuerpo hacia un lado y luego al otro de forma alternativa (lateroflexión activa del tronco).",
      "interpretation": "✅ Dolor en el lado de la inclinación → neuralgia intercostal. ✅ Dolor en el lado contrario → signo de pleuritis."
    },
    "fr": {
      "region": "🫁 THORACIQUE",
      "name": "Signe de Shepelman",
      "category": "Neuropathie / Radiculopathie dorsale",
      "posPatient": "Position assise, bras parallèles au tronc, mains posées sur la table.",
      "posTherapist": "Debout derrière le patient (fente double).",
      "execution": "Le thérapeute demande au patient d'incliner le corps d'un côté puis de l'autre de manière alternative (latéroflexion active du tronc).",
      "interpretation": "✅ Douleur du côté de l'inclinaison → névralgie intercostale. ✅ Douleur du côté opposé → signe de pleurésie."
    },
    "en": {
      "region": "🫁 THORACIC",
      "name": "Shepelman's sign",
      "category": "Thoracic neuropathy / radiculopathy",
      "posPatient": "Seated, arms parallel to the trunk, hands resting on the table.",
      "posTherapist": "Standing behind the patient (double lunge).",
      "execution": "Therapist asks the patient to tilt the body to one side and then the other alternately (active lateral flexion of the trunk).",
      "interpretation": "✅ Pain on the side of the tilt → intercostal neuralgia. ✅ Pain on the opposite side → sign of pleurisy."
    },
    "image": "images/Signo de Shepelman.webp"
  },
  {
    "id": 14,
    "num": "14",
    "es": {
      "region": "🫁 TORÁCICA",
      "name": "Signo de Adam",
      "category": "Valorar escoliosis",
      "posPatient": "Bipedestación, brazos a lo largo del tronco.",
      "posTherapist": "Detrás del paciente, observando.",
      "execution": "Paciente realiza:\n1. Flexión cervical máxima.\n2. Flexión de tronco ~90°.\n3. Brazos colgando de forma relajada.",
      "interpretation": "✅ Abombamiento en hemitórax → escoliosis estructural. ✅ Curvatura desaparece con la flexión → escoliosis funcional."
    },
    "fr": {
      "region": "🫁 THORACIQUE",
      "name": "Test d'Adam",
      "category": "Évaluation de la scoliose",
      "posPatient": "Debout, bras le long du tronc.",
      "posTherapist": "Derrière le patient, en train d'observer.",
      "execution": "Le patient réalise :\n1. Flexion cervicale maximale.\n2. Flexion du tronc à environ 90°.\n3. Bras pendants de manière relâchée.",
      "interpretation": "✅ Gibbosité d'un hémithorax → scoliose structurelle. ✅ La courbure disparaît avec la flexion → scoliose fonctionnelle."
    },
    "en": {
      "region": "🫁 THORACIC",
      "name": "Adam's forward bend test",
      "category": "Scoliosis assessment",
      "posPatient": "Standing, arms along the trunk.",
      "posTherapist": "Behind the patient, observing.",
      "execution": "Patient performs:\n1. Maximum cervical flexion.\n2. Trunk flexion ~90°.\n3. Arms hanging in a relaxed manner.",
      "interpretation": "✅ Hump in hemithorax → structural scoliosis. ✅ Curvature disappears with flexion → functional scoliosis."
    },
    "image": "images/Signo de Adam.webp"
  },
  {
    "id": 15,
    "num": "15",
    "es": {
      "region": "Leg: 🦵 LUMBAR",
      "name": "Signo de Hoover (test comportamiento)",
      "category": "Movilidad lumbar / Simulación",
      "posPatient": "Decúbito supino, brazos extendidos, rodillas en extensión, piernas relajadas sobre camilla.",
      "posTherapist": "De pie lateral (finta adelante hacia la cabeza). Mano caudal bajo talón; mano craneal a altura de rodilla para fijar extensión.",
      "execution": "Pedir al paciente que levante la pierna NO fijada con rodilla en extensión. Terapeuta sujeta la otra pierna. Realizar en ambas piernas.",
      "interpretation": "✅ Refiere no poder levantar la pierna pero sin presión en el calcáneo contralateral → simulación."
    },
    "fr": {
      "region": "🦵 LOMBAIRE",
      "name": "Signe de Hoover (test de comportement)",
      "category": "Mobilité lombaire / Simulation",
      "posPatient": "Décubitus dorsal, bras étendus, genoux en extension, jambes relâchées sur la table.",
      "posTherapist": "Debout sur le côté (fente avant vers la tête). Main caudale sous le talon ; main crâniale à hauteur du genou pour fixer l'extension.",
      "execution": "Demander au patient de lever la jambe NON fixée avec le genou en extension. Le thérapeute tient l'autre jambe. Réaliser sur les deux jambes.",
      "interpretation": "✅ Indique ne pas pouvoir lever la jambe mais sans aucune pression sur le calcanéum contralatéral → simulation."
    },
    "en": {
      "region": "🦵 LUMBAR",
      "name": "Hoover's sign (malingering test)",
      "category": "Lumbar mobility / Malingering",
      "posPatient": "Supine position, arms extended, knees extended, legs relaxed on the table.",
      "posTherapist": "Standing to the side (lunge forward toward the head). Caudal hand under the heel; cranial hand at knee level to fix extension.",
      "execution": "Ask the patient to lift the UNFIXED leg with the knee extended. The therapist holds the other leg. Perform on both legs.",
      "interpretation": "✅ Reports being unable to lift the leg but without down-pressure on the contralateral calcaneus → malingering/simulation."
    },
    "image": "images/Signo de Hoover - test de comportamiento.webp"
  },
  {
    "id": 16,
    "num": "16",
    "es": {
      "region": "🦵 LUMBAR",
      "name": "Prueba de Schober",
      "category": "Movilidad lumbar",
      "posPatient": "De pie, brazos a lo largo del tronco.",
      "posTherapist": "De pie a un lado del paciente (finta doble).",
      "execution": "1. Con rotulador: marca horizontal a nivel S1 y otra 10 cm por encima.\n2. Pedir que se incline hacia delante → medir distancia entre marcas.\n3. Pedir que se extienda → medir nuevamente.",
      "interpretation": "✅ Separación <15 cm en flexión o <8-9 cm en extensión → limitación de la elasticidad lumbar. Útil en espondilitis anquilosante."
    },
    "fr": {
      "region": "🦵 LOMBAIRE",
      "name": "Test de Schober",
      "category": "Mobilité lombaire",
      "posPatient": "Debout, bras le long du tronc.",
      "posTherapist": "Debout à côté du patient (fente double).",
      "execution": "1. Avec un feutre : marque horizontale au niveau de S1 et une autre 10 cm au-dessus.\n2. Demander de s'incliner vers l'avant → mesurer la distance entre les marques.\n3. Demander de faire une extension → mesurer à nouveau.",
      "interpretation": "✅ Écartement <15 cm en flexion ou <8-9 cm en extension → limitation de l'élasticité lombaire. Utile dans la spondylarthrite ankylosante."
    },
    "en": {
      "region": "🦵 LUMBAR",
      "name": "Schober's test",
      "category": "Lumbar mobility",
      "posPatient": "Standing, arms along the trunk.",
      "posTherapist": "Standing at the patient's side (double lunge).",
      "execution": "1. With a marker: horizontal mark at S1 level and another 10 cm above.\n2. Ask the patient to bend forward → measure distance between marks.\n3. Ask the patient to extend → measure again.",
      "interpretation": "✅ Separation <15 cm in flexion or <8-9 cm in extension → limited lumbar elasticity. Useful in ankylosing spondylitis."
    },
    "image": "images/Prueba de Shober.webp"
  },
  {
    "id": 17,
    "num": "17",
    "es": {
      "region": "🦵 LUMBAR",
      "name": "Prueba de distancia dedo-suelo",
      "category": "Movilidad lumbar",
      "posPatient": "Bipedestación, pies juntos, rodillas completamente extendidas.",
      "posTherapist": "A un lado del paciente en cuclillas con cinta métrica.",
      "execution": "Paciente realiza anteflexión activa de columna (brazos, manos y dedos extendidos y relajados hacia delante):\n1. Flexión de caderas bilateralmente.\n2. Flexión del raquis lumbar (sobre todo L5-S1).\n3. Retroversión de pelvis.\nMedir distancia entre la punta de los dedos y el suelo.",
      "interpretation": "✅ Dolor al inicio → restricción coxofemoral. ✅ Dolor en 2ª parte → disfunción lumbar o sacroilíaca. ✅ Dolor en 3ª parte → lumbar alta o torácica."
    },
    "fr": {
      "region": "🦵 LOMBAIRE",
      "name": "Test de la distance doigt-sol",
      "category": "Mobilité lombaire",
      "posPatient": "Debout, pieds joints, genoux complètement étendus.",
      "posTherapist": "Accroupi à côté du patient avec un ruban à mesurer.",
      "execution": "Le patient réalise une antéflexion active de la colonne (bras, mains et doigts étendus et relâchés vers l'avant) :\n1. Flexion des hanches bilatéralement.\n2. Flexion du rachis lombaire (surtout L5-S1).\n3. Rétroversion du bassin.\nMesurer la distance entre le bout des doigts et le sol.",
      "interpretation": "✅ Douleur au début → restriction coxo-fémorale. ✅ Douleur en 2ème partie → dysfonction lombaire ou sacro-iliaque. ✅ Douleur en 3ème partie → lombaire haute ou thoracique."
    },
    "en": {
      "region": "🦵 LUMBAR",
      "name": "Finger-to-floor distance test",
      "category": "Lumbar mobility",
      "posPatient": "Standing, feet together, knees fully extended.",
      "posTherapist": "Squatting at the patient's side with a tape measure.",
      "execution": "Patient performs active forward flexion of the spine (arms, hands, and fingers extended and relaxed forward):\n1. Bilateral hip flexion.\n2. Flexion of the lumbar spine (especially L5-S1).\n3. Pelvic retroversion.\nNote: Measure the distance between the fingertips and the floor.",
      "interpretation": "✅ Pain at the beginning → hip restriction. ✅ Pain in the 2nd part → lumbar or sacroiliac dysfunction. ✅ Pain in the 3rd part → upper lumbar or thoracic."
    },
    "image": "images/Prueba de distancia dedo-suelo.webp"
  },
  {
    "id": 18,
    "num": "18",
    "es": {
      "region": "🦵 LUMBAR",
      "name": "Test de Valsalva",
      "category": "Patología discal lumbar",
      "posPatient": "Sedestación, brazos a lo largo del cuerpo, manos sobre muslos.\n⚠️ Contraicado en glaucoma (aumenta presión intracraneal).",
      "posTherapist": "Bipedestación junto al paciente.",
      "execution": "Paciente: inspiración máxima → espiración forzada máxima SIN pulsar el aire (como para defecar).",
      "interpretation": "✅ Dolor o aumento del dolor raquídeo → afectación discal con posible hernia. ✅ Dolor en ligamento inguinal → posible hernia inguinal."
    },
    "fr": {
      "region": "🦵 LOMBAIRE",
      "name": "Test de Valsalva",
      "category": "Pathologie discale lombaire",
      "posPatient": "Position assise, bras le long du corps, mains sur les cuisses.\n⚠️ Contre-indiqué en cas de glaucome (augmente la pression intracrânienne).",
      "posTherapist": "Debout à côté du patient.",
      "execution": "Patient : inspiration maximale → expiration forcée maximale SANS expulser l'air (comme pour aller à la selle).",
      "interpretation": "✅ Douleur ou augmentation de la douleur rachidienne → atteinte discale avec possible hernie. ✅ Douleur au niveau du ligament inguinal → possible hernie inguinale."
    },
    "en": {
      "region": "🦵 LUMBAR",
      "name": "Valsalva maneuver",
      "category": "Lumbar disc pathology",
      "posPatient": "Seated, arms along the body, hands on thighs.\n⚠️ Contraindicated in glaucoma (increases intracranial pressure).",
      "posTherapist": "Standing next to the patient.",
      "execution": "Patient: maximum inspiration → maximum forced expiration WITHOUT expelling air (like bearing down).",
      "interpretation": "✅ Pain or increased spinal pain → disc involvement with possible herniation. ✅ Pain in the inguinal ligament → possible inguinal hernia."
    },
    "image": "images/Test de Valsalva.webp"
  },
  {
    "id": 19,
    "num": "19",
    "es": {
      "region": "🦵 LUMBAR",
      "name": "Signo de Bonnet",
      "category": "Neuropatía / Radiculopatía lumbar",
      "posPatient": "Decúbito dorsal, MMSS a lo largo del cuerpo. Pierna a valorar: rodilla en flexión, planta del pie apoyada en camilla. Pierna contraria: extensión de rodilla.",
      "posTherapist": "De pie en el lado a valorar (finta doble), altura de caderas. Mano craneal sobre rodilla homolateral; mano caudal abarca el empeine del mismo pie.",
      "execution": "Terapeuta realiza APROXIMACIÓN + ROTACIÓN INTERNA de la cadera del lado a evaluar.",
      "interpretation": "✅ Dolor y/o parestesias en recorrido ciático → compresión del nervio ciático a nivel del músculo piramidal."
    },
    "fr": {
      "region": "🦵 LOMBAIRE",
      "name": "Signe de Bonnet",
      "category": "Neuropathie / Radiculopathie lombaire",
      "posPatient": "Décubitus dorsal, membres supérieurs le long du corps. Jambe à évaluer : genou en flexion, plante du pied appuyée sur la table. Jambe opposée : extension du genou.",
      "posTherapist": "Debout du côté à évaluer (fente double), à hauteur des hanches. Main crâniale sur le genou homolatéral ; main caudale englobe le coup-de-pied.",
      "execution": "Le thérapeute réalise une ADDUCTION + ROTATION INTERNE de la hanche du côté à évaluer.",
      "interpretation": "✅ Douleur et/ou paresthésies sur le trajet sciatique → compression du nerf sciatique au niveau du muscle piriforme."
    },
    "en": {
      "region": "🦵 LUMBAR",
      "name": "Bonnet's sign",
      "category": "Lumbar neuropathy / radiculopathy",
      "posPatient": "Supine position, upper limbs along the body. Leg to be assessed: knee in flexion, sole of the foot resting on the table. Opposite leg: knee extended.",
      "posTherapist": "Standing on the side to be assessed (double lunge) at hip height. Cranial hand on the homolateral knee; caudal hand embraces the instep of the same foot.",
      "execution": "Therapist performs ADDUCTION + INTERNAL ROTATION of the hip on the side to be evaluated.",
      "interpretation": "✅ Pain and/or paresthesia along the sciatic nerve pathway → compression of the sciatic nerve at the piriformis muscle level."
    },
    "image": "images/Signo de Bonnet.webp"
  },
  {
    "id": 20,
    "num": "20",
    "es": {
      "region": "🦵 LUMBAR",
      "name": "Estiramiento nervio femoral",
      "category": "Neuropatía / Radiculopatía lumbar",
      "posPatient": "Decúbito ventral, brazos a lo largo del cuerpo, piernas sobre camilla con rodillas en extensión.",
      "posTherapist": "Bipedestación en el lado a valorar (finta adelante en dirección craneal) a la altura de las rodillas del paciente.",
      "execution": "1. Flexionar rodilla del paciente ~90°.\n2. Mano caudal sobre cara anterior de rodilla homolateral.\n3. Mano craneal abarca el pie.\n4. Contactar el pecho con la cara anterior de la tibia del lado a valorar.\n5. Dejarse caer lentamente → inducir flexión de rodilla + extensión de cadera.",
      "interpretation": "✅ Dolor lumbar o en recorrido del nervio femoral → compresión del nervio femoral."
    },
    "fr": {
      "region": "🦵 LOMBAIRE",
      "name": "Étirement du nerf fémoral",
      "category": "Neuropathie / Radiculopathie lombaire",
      "posPatient": "Décubitus ventral, bras le long du corps, jambes sur la table avec genoux en extension.",
      "posTherapist": "Debout du côté à évaluer (fente avant en direction crâniale) à la hauteur des genoux du patient.",
      "execution": "1. Fléchir le genou du patient à environ 90°.\n2. Main caudale sur la face antérieure du genou homolatéral.\n3. Main crâniale englobe le pied.\n4. Mettre en contact la poitrine avec la face antérieure du tibia du côté à évaluer.\n5. Se laisser tomber lentement → induire une flexion du genou + extension de la hanche.",
      "interpretation": "✅ Douleur lombaire ou sur le trajet du nerf fémoral → compression du nerf fémoral."
    },
    "en": {
      "region": "🦵 LUMBAR",
      "name": "Femoral nerve stretch test",
      "category": "Lumbar neuropathy / radiculopathy",
      "posPatient": "Prone position, arms along the body, legs on the table with knees extended.",
      "posTherapist": "Standing on the side to be assessed (lunge forward in a cranial direction) at the level of the patient's knees.",
      "execution": "1. Flex the patient's knee ~90°.\n2. Caudal hand on the anterior aspect of the homolateral knee.\n3. Cranial hand embraces the foot.\n4. Contact chest with the anterior aspect of the tibia of the side to be evaluated.\n5. Lean back slowly → induce knee flexion + hip extension.",
      "interpretation": "✅ Lumbar pain or pain along the femoral nerve pathway → femoral nerve compression."
    },
    "image": "images/Estiramiento nervio femoral.webp"
  },
  {
    "id": 21,
    "num": "21",
    "es": {
      "region": "🦵 LUMBAR",
      "name": "Prueba de Lasègue (SLR)",
      "category": "Neuropatía / Radiculopatía lumbar",
      "posPatient": "Decúbito supino, brazos a lo largo del cuerpo, rodillas extendidas.",
      "posTherapist": "Bipedestación lateral (finta doble) a la altura de las tibias. Mano craneal en cara anterolateral de la pierna SANA algo por encima de la rodilla (mantiene extensión); mano caudal en calcáneo del mismo lado.\n💡 Se aplica estiramiento dural en ambos lados → puede aparecer dolor radicular también en pierna contra la camilla.",
      "execution": "Terapeuta flexiona pasivamente la cadera SANA del paciente manteniendo la rodilla en extensión. La otra pierna queda en reposo sobre la camilla.",
      "interpretation": "✅ Dolor lumbar o ciático durante la maniobra → afectación discal lumbar."
    },
    "fr": {
      "region": "🦵 LOMBAIRE",
      "name": "Test de Lasègue (SLR)",
      "category": "Neuropathie / Radiculopathie lombaire",
      "posPatient": "Décubitus dorsal, bras le long du corps, genoux étendus.",
      "posTherapist": "Debout sur le côté (fente double) à la hauteur des tibias. Main crâniale sur la face antérolatérale de la jambe SAINE un peu au-dessus du genou (maintient l'extension) ; main caudale sur le calcanéum du même côté.\n💡 Un étirement dural est appliqué des deux côtés → une douleur radiculaire peut également apparaître dans la jambe sur la table.",
      "execution": "Le thérapeute fléchit passivement la hanche SAINE du patient en maintenant le genou en extension. L'autre jambe reste au repos sur la table.",
      "interpretation": "✅ Douleur lombaire ou sciatique pendant la manœuvre → atteinte discale lombaire."
    },
    "en": {
      "region": "🦵 LUMBAR",
      "name": "Lasègue's sign (Straight Leg Raise - SLR)",
      "category": "Lumbar neuropathy / radiculopathy",
      "posPatient": "Supine position, arms along the body, knees extended.",
      "posTherapist": "Standing laterally (double lunge) at the level of the tibias. Cranial hand on the anterolateral aspect of the HEALTHY leg slightly above the knee (maintains extension); caudal hand on the calcaneus of the same side.\n💡 Dural stretch is applied on both sides → radicular pain can also appear in the leg resting on the table.",
      "execution": "The therapist passively flexes the HEALTHY hip of the patient while keeping the knee extended. The other leg remains at rest on the table.",
      "interpretation": "✅ Lumbar or sciatic pain during the maneuver → lumbar disc involvement."
    },
    "image": "images/Prueba de Lasegue (SLR; straight leg raising).webp"
  },
  {
    "id": 22,
    "num": "22",
    "es": {
      "region": "🦵 LUMBAR",
      "name": "Signo de Bragard",
      "category": "Neuropatía / Radiculopatía lumbar",
      "posPatient": "Decúbito supino (igual que Lasègue).",
      "posTherapist": "Igual que Lasègue.",
      "execution": "1. Realizar Lasègue hasta el punto donde aparece el dolor.\n2. Bajar ligeramente el miembro (reducir la tensión).\n3. Realizar DORSIFLEXIÓN del pie.",
      "interpretation": "✅ Reaparece el dolor con la dorsiflexión → confirma origen neural (complementa el Lasègue)."
    },
    "fr": {
      "region": "🦵 LOMBAIRE",
      "name": "Signe de Bragard",
      "category": "Neuropathie / Radiculopathie lombaire",
      "posPatient": "Décubitus dorsal (comme Lasègue).",
      "posTherapist": "Comme Lasègue.",
      "execution": "1. Réaliser le Lasègue jusqu'au point d'apparition de la douleur.\n2. Abaisser légèrement le membre (réduire la tension).\n3. Réaliser une DORSIFLEXION du pied.",
      "interpretation": "✅ Réapparition de la douleur avec la dorsiflexion → confirme l'origine neurale (complémente le Lasègue)."
    },
    "en": {
      "region": "🦵 LUMBAR",
      "name": "Bragard's sign",
      "category": "Lumbar neuropathy / radiculopathy",
      "posPatient": "Supine position (same as Lasègue).",
      "posTherapist": "Same as Lasègue.",
      "execution": "1. Perform the Lasègue test up to the point where pain appears.\n2. Lower the limb slightly (reduce tension).\n3. Perform DORSIFLEXION of the foot.",
      "interpretation": "✅ Pain reappears with dorsiflexion → confirms neural origin (complements Lasègue)."
    },
    "image": "images/Signo de Bragard.webp"
  },
  {
    "id": 23,
    "num": "23",
    "es": {
      "region": "🦵 LUMBAR",
      "name": "Prueba de Thomas (Psoas)",
      "category": "Problema muscular lumbar",
      "posPatient": "Decúbito supino. Paciente lleva AMBAS rodillas al pecho con sus manos, fijándolas en esa posición.",
      "posTherapist": "De pie lateral al paciente (finta adelante), altura de caderas. Mano craneal bajo columna lumbar; mano caudal abarca el tercio distal de la tibia del lado a evaluar.",
      "execution": "Terapeuta baja lentamente hacia la extensión la pierna del lado cuyo músculo psoas quiere examinar. Examinar ambas piernas de forma alternativa.",
      "interpretation": "✅ Al extender la cadera aumenta la lordosis lumbar o no puede extender completamente → retracción/acortamiento del psoas."
    },
    "fr": {
      "region": "🦵 LOMBAIRE",
      "name": "Test de Thomas (Psoas)",
      "category": "Problème musculaire lombaire",
      "posPatient": "Décubitus dorsal. Le patient amène les DEUX genoux à la poitrine avec ses mains, les fixant dans cette position.",
      "posTherapist": "Debout sur le côté du patient (fente avant), hauteur des hanches. Main crâniale sous la colonne lombaire ; main caudale englobe le tiers distal du tibia du côté à évaluer.",
      "execution": "Le thérapeute abaisse lentement vers l'extension la jambe du côté dont il souhaite examiner le muscle psoas. Examiner les deux jambes de manière alternative.",
      "interpretation": "✅ Lors de l'extension de la hanche, la lordose lombaire augmente ou l'extension complète est impossible → rétraction/raccourcissement du psoas."
    },
    "en": {
      "region": "🦵 LUMBAR",
      "name": "Thomas test (Psoas)",
      "category": "Lumbar muscle problem",
      "posPatient": "Supine position. Patient brings BOTH knees to the chest with their hands, fixing them in that position.",
      "posTherapist": "Standing lateral to the patient (lunge forward) at hip height. Cranial hand under the lumbar spine; caudal hand embraces the distal third of the tibia on the side to be evaluated.",
      "execution": "Therapist slowly lowers the leg of the side whose psoas muscle is to be examined into extension. Examine both legs alternately.",
      "interpretation": "✅ Extending the hip increases lumbar lordosis or the patient cannot extend fully → psoas retraction/shortening."
    },
    "image": "images/Prueba de Thomas (Psoas).webp"
  },
  {
    "id": 24,
    "num": "24",
    "es": {
      "region": "🦵 LUMBAR",
      "name": "Prueba del psoas",
      "category": "Problema muscular lumbar",
      "posPatient": "Decúbito supino, piernas en extensión de rodillas, brazos a lo largo del tronco reposados sobre la camilla.",
      "posTherapist": "Bipedestación lateral en el lado a valorar (finta doble), a la altura de las rodillas del paciente, orientado hacia este.",
      "execution": "1. Pedir al paciente que eleve la pierna SIN flexionar la rodilla.\n2. Aproximadamente a mitad del recorrido articular → terapeuta realiza una presión inesperada y súbita sobre la zona anterior del muslo llevándolo a extensión de cadera.",
      "interpretation": "✅ Dolor lumbar, sacroilíaco o coxofemoral → afectación lumbar o pélvica (espondiloartrosis, espondilitis o hernia discal)."
    },
    "fr": {
      "region": "🦵 LOMBAIRE",
      "name": "Test du psoas",
      "category": "Problème musculaire lombaire",
      "posPatient": "Décubitus dorsal, jambes en extension de genoux, bras le long du tronc posés sur la table.",
      "posTherapist": "Debout sur le côté à évaluer (fente double), à la hauteur des genoux du patient, orienté vers celui-ci.",
      "execution": "1. Demander au patient de lever la jambe SANS fléchir le genou.\n2. Environ à mi-chemin de l'amplitude articulaire → le thérapeute effectue une pression inattendue et soudaine sur la zone antérieure de la cuisse, l'amenant vers l'extension de hanche.",
      "interpretation": "✅ Douleur lombaire, sacro-iliaque ou coxo-fémorale → atteinte lombaire ou pelvienne (spondylarthrose, spondylarthrite ou hernie discale)."
    },
    "en": {
      "region": "🦵 LUMBAR",
      "name": "Psoas test",
      "category": "Lumbar muscle problem",
      "posPatient": "Supine position, legs with knees extended, arms along the trunk resting on the table.",
      "posTherapist": "Standing laterally on the side to be assessed (double lunge) at the level of the patient's knees, facing them.",
      "execution": "1. Ask the patient to raise the leg WITHOUT flexing the knee.\n2. Approximately halfway through the range of motion → therapist applies an unexpected and sudden pressure on the anterior aspect of the thigh, forcing it into hip extension.",
      "interpretation": "✅ Lumbar, sacroiliac, or hip pain → lumbar or pelvic involvement (spondyloarthritis, spondylitis, or disc herniation)."
    },
    "image": "images/Prueba del psoas.webp"
  },
  {
    "id": 25,
    "num": "25",
    "es": {
      "region": "🦵 LUMBAR",
      "name": "Test de Biering-Sorensen",
      "category": "Problema muscular lumbar",
      "posPatient": "Decúbito prono. Parte inferior del cuerpo apoyada en camilla y parte superior SUSPENDIDA horizontalmente. Brazos cruzados, manos en hombros. Borde de la camilla ≈ a nivel EIAS. Miembros inferiores fijados con cinchas a tobillos, rodillas y caderas.",
      "posTherapist": "Observando.",
      "execution": "Paciente mantiene el tronco en posición HORIZONTAL el mayor tiempo posible.\nSe da por finalizada cuando el paciente contacta con cualquier parte del tren superior en el suelo.",
      "interpretation": "✅ Tiempo de resistencia reducido → debilidad de la musculatura extensora lumbar, factor de riesgo de lumbalgia."
    },
    "fr": {
      "region": "🦵 LOMBAIRE",
      "name": "Test de Biering-Sorensen",
      "category": "Problème musculaire lombaire",
      "posPatient": "Décubitus ventral. Partie inférieure du corps appuyée sur la table et partie supérieure SUSPENDUE horizontalement. Bras croisés, mains sur les épaules. Bord de la table ≈ au niveau de l'ÉIAS. Membres inférieurs fixés avec des sangles aux chevilles, genoux et hanches.",
      "posTherapist": "Observant.",
      "execution": "Le patient maintient le tronc en position HORIZONTALE le plus longtemps possible.\nLe test prend fin lorsque le patient touche le sol avec une partie quelconque du haut du corps.",
      "interpretation": "✅ Temps de résistance réduit → faiblesse de la musculature érectrice lombaire, facteur de risque de lombalgie."
    },
    "en": {
      "region": "🦵 LUMBAR",
      "name": "Biering-Sorensen test",
      "category": "Lumbar muscle problem",
      "posPatient": "Prone position. Lower body supported on the table and upper body SUSPENDED horizontally. Arms crossed, hands on shoulders. Edge of the table ≈ at ASIS level. Lower limbs fixed with straps at ankles, knees, and hips.",
      "posTherapist": "Observing.",
      "execution": "Patient maintains the trunk in a HORIZONTAL position for as long as possible.\nIt ends when the patient contacts the floor with any part of the upper body.",
      "interpretation": "✅ Reduced endurance time → weakness of the lumbar extensor muscles, a risk factor for low back pain."
    },
    "image": "images/Test de Biering-Sorensen.webp"
  },
  {
    "id": 26,
    "num": "43",
    "es": {
      "region": "🦴 CADERA",
      "name": "Prueba de Laguerre",
      "category": "Movilidad cadera / Disfunción sacroilíaca",
      "posPatient": "Decúbito dorsal, MMSS a lo largo del cuerpo, rodillas en extensión sobre la camilla.",
      "posTherapist": "Bipedestación en finta doble en el lado a valorar, a la altura de las tibias del paciente, orientado hacia este.",
      "execution": "1. Mano superior sobre la articulación de la rodilla homolateral.\n2. Mano inferior abarca el calcáneo de la pierna a valorar.\n3. Llevar la cadera y la rodilla a 90° de flexión cada una.\n4. Desde ahí, conducir de forma pasiva la cadera a separación y rotación externa, acercando el calcáneo a la línea media del cuerpo.",
      "interpretation": "✅ Dolor con la palpación de apófisis espinosas → disfunción sacroilíaca (comparar ambos lados)."
    },
    "fr": {
      "region": "🦴 HANCHE",
      "name": "Test de Laguerre",
      "category": "Mobilité de la hanche / Dysfonction sacro-iliaque",
      "posPatient": "Décubitus dorsal, membres supérieurs le long du corps, genoux en extension sur la table.",
      "posTherapist": "Debout (fente double) du côté à évaluer, à la hauteur des tibias du patient, orienté vers celui-ci.",
      "execution": "1. Main supérieure sur l'articulation du genou homolatéral.\n2. Main inférieure englobe le calcanéum de la jambe à évaluer.\n3. Amener la hanche et le genou à 90° de flexion chacun.\n4. De là, conduire passivement la hanche en abduction et rotation externe, en rapprochant le calcanéum de la ligne médiane du corps.",
      "interpretation": "✅ Douleur à la palpation des apophyses épineuses → dysfonction sacro-iliaque (comparer les deux côtés)."
    },
    "en": {
      "region": "🦴 HIP",
      "name": "Laguerre test",
      "category": "Hip mobility / Sacroiliac dysfunction",
      "posPatient": "Supine position, upper limbs along the body, knees in extension on the table.",
      "posTherapist": "Standing (double lunge) on the side to be assessed, at the level of the patient's tibias, facing them.",
      "execution": "1. Superior hand over the homolateral knee joint.\n2. Inferior hand embraces the calcaneus of the leg to be assessed.\n3. Bring hip and knee to 90° of flexion each.\n4. From there, passively guide the hip into abduction and external rotation, bringing the calcaneus closer to the body's midline.",
      "interpretation": "✅ Pain with palpation of spinous processes → sacroiliac dysfunction (compare both sides)."
    },
    "image": "images/Prueba de Laguerre.webp"
  },
  {
    "id": 27,
    "num": "44",
    "es": {
      "region": "🦴 CADERA",
      "name": "Test de compresión sacroilíaco",
      "category": "Movilidad cadera / Disfunción sacroilíaca",
      "posPatient": "La prueba comprende 4 posiciones (por orden):\n1. Decúbito dorsal, brazos a lo largo del cuerpo, rodillas extendidas.\n2. Tumbado de lado, miembro a valorar arriba con rodilla en extensión y miembro contralateral en flexión de cadera y rodilla sobre la camilla.\n3. Decúbito dorsal, brazos a lo largo, rodillas extendidas.\n4. Decúbito ventral, brazos a lo largo, rodillas extendidas.",
      "posTherapist": "4 posiciones del terapeuta correspondientes:\n1. Bipedestación a un lado, finta craneal. Talón de mano derecha sobre EIAS derecha y mano izquierda sobre EIAS izquierda (brazos cruzados).\n2. Bipedestación por delante del paciente (finta doble). Ambas manos sobre el hueso ilíaco a valorar en su parte externa.\n3. Bipedestación a un lado, finta craneal. Manos sobre crestas ilíacas por su borde externo.\n4. Bipedestación a la altura de la pelvis (finta craneal). Mano inferior encima del sacro; mano superior refuerza.",
      "execution": "4 empujes correspondientes a cada posición:\n1. Empuje hacia la camilla como para ABRIR los huesos ilíacos.\n2. Empuje hacia la camilla COMPRIMIENDO el hueso ilíaco.\n3. Empuje intentando UNIR ambas manos (cerrar los huesos ilíacos).\n4. Empuje COMPRIMIENDO el sacro hacia la camilla.",
      "interpretation": "✅ Cada empuje positivo orienta hacia la afectación de ligamentos sacroilíacos anteriores o posteriores según la dirección."
    },
    "fr": {
      "region": "🦴 HANCHE",
      "name": "Test de compression sacro-iliaque",
      "category": "Mobilité de la hanche / Dysfonction sacro-iliaque",
      "posPatient": "Le test comprend 4 positions (dans l'ordre) :\n1. Décubitus dorsal, bras le long du corps, genoux étendus.\n2. Couché sur le côté, membre à évaluer au-dessus avec le genou en extension et membre contralatéral en flexion de hanche et de genou sur la table.\n3. Décubitus dorsal, bras le long du corps, genoux étendus.\n4. Décubitus ventral, bras le long du corps, genoux étendus.",
      "posTherapist": "4 positions du thérapeute correspondantes :\n1. Debout d'un côté, fente crâniale. Talon de la main droite sur l'ÉIAS droite et main gauche sur l'ÉIAS gauche (bras croisés).\n2. Debout devant le patient (fente double). Les deux mains sur l'os iliaque à évaluer sur sa partie externe.\n3. Debout d'un côté, fente crâniale. Mains sur les crêtes iliaques par leur bord externe.\n4. Debout à la hauteur du bassin (fente crâniale). Main inférieure au-dessus du sacrum ; la main supérieure renforce.",
      "execution": "4 poussées correspondantes à chaque position :\n1. Poussée vers la table comme pour OUVRIR les os iliaques.\n2. Poussée vers la table en COMPRIMANT l'os iliaque.\n3. Poussée essayant de JOINDRE les deux mains (fermer les os iliaques).\n4. Poussée en COMPRIMANT le sacrum vers la table.",
      "interpretation": "✅ Chaque poussée positive oriente vers l'atteinte des ligaments sacro-iliaques antérieurs ou postérieurs selon la direction."
    },
    "en": {
      "region": "🦴 HIP",
      "name": "Sacroiliac compression test",
      "category": "Hip mobility / Sacroiliac dysfunction",
      "posPatient": "The test comprises 4 positions (in order):\n1. Supine position, arms along the body, knees extended.\n2. Side-lying, limb to be assessed on top with knee extended and contralateral limb in hip and knee flexion on the table.\n3. Supine position, arms along the body, knees extended.\n4. Prone position, arms along the body, knees extended.",
      "posTherapist": "4 corresponding therapist positions:\n1. Standing at one side, cranial lunge. Heel of the right hand on right ASIS and left hand on left ASIS (arms crossed).\n2. Standing in front of the patient (double lunge). Both hands on the external aspect of the iliac bone to be assessed.\n3. Standing at one side, cranial lunge. Hands on the external border of the iliac crests.\n4. Standing at pelvis height (cranial lunge). Inferior hand on top of the sacrum; superior hand reinforces.",
      "execution": "4 corresponding pushes for each position:\n1. Push toward the table as if to OPEN the iliac bones.\n2. Push toward the table COMPRESSING the iliac bone.\n3. Push trying to BRING both hands together (close the iliac bones).\n4. Push COMPRESSING the sacrum toward the table.",
      "interpretation": "✅ Each positive push points toward involvement of the anterior or posterior sacroiliac ligaments depending on the direction."
    },
    "image": "images/Test de compresión.webp"
  },
  {
    "id": 28,
    "num": "45",
    "es": {
      "region": "🦴 CADERA",
      "name": "Test de Patrick / FABER",
      "category": "Movilidad cadera / Disfunción sacroilíaca",
      "posPatient": "Decúbito dorsal, MMSS a lo largo del tronco. El miembro del lado a valorar en flexión de rodilla de 90° y en abducción de cadera, de forma que la planta del pie contacte con la cara interna de la rodilla de la otra pierna (que reposa en extensión).",
      "posTherapist": "De pie en el lado a valorar, finta adelante en dirección craneal, a la altura de las rodillas del paciente. Mano interna contacta con la espina ilíaca anterosuperior de la hemipelvis CONTRALATERAL para bloquearla. Mano externa sobre cara interna de la rodilla del miembro a valorar.",
      "execution": "El terapeuta pide al paciente que lleve de forma activa el miembro del lado a valorar a abducción de cadera (rodilla hacia la camilla). Cuando ya no pueda más o la rodilla contacte la camilla → el terapeuta ejerce un poco de presión sobre ella hacia el suelo. Medir y contabilizar la distancia entre la rodilla del lado afecto y la camilla. Realizar en el miembro contralateral.",
      "interpretation": "✅ Mayor distancia rodilla-camilla + dolor → disfunción de cadera o articulación sacroilíaca."
    },
    "fr": {
      "region": "🦴 HANCHE",
      "name": "Test de Patrick / FABER",
      "category": "Mobilité de la hanche / Dysfonction sacro-iliaque",
      "posPatient": "Décubitus dorsal, membres supérieurs le long du tronc. Le membre du côté à évaluer est en flexion de genou à 90° et en abduction de hanche, de sorte que la plante du pied soit en contact avec la face interne du genou de l'autre jambe (qui repose en extension).",
      "posTherapist": "Debout du côté à évaluer, fente avant en direction crâniale, à la hauteur des genoux du patient. Main interne en contact avec l'épine iliaque antéro-supérieure de l'hémibassin CONTRALATÉRAL pour le bloquer. Main externe sur la face interne du genou du membre à évaluer.",
      "execution": "Le thérapeute demande au patient d'amener activement le membre du côté à évaluer en abduction de hanche (genou vers la table). Lorsqu'il ne peut plus ou que le genou touche la table → le thérapeute exerce une légère pression dessus vers le sol. Mesurer la distance entre le genou du côté affecté et la table. Réaliser sur le membre contralatéral.",
      "interpretation": "✅ Distance genou-table plus grande + douleur → dysfonction de la hanche ou de l'articulation sacro-iliaque."
    },
    "en": {
      "region": "🦴 HIP",
      "name": "Patrick's test / FABER",
      "category": "Hip mobility / Sacroiliac dysfunction",
      "posPatient": "Supine position, upper limbs along the trunk. The limb on the side to be assessed in 90° knee flexion and hip abduction, so that the sole of the foot contacts the internal aspect of the opposite knee (which rests in extension).",
      "posTherapist": "Standing on the side to be assessed, lunge forward in a cranial direction, at the level of the patient's knees. Internal hand contacts the anterosuperior iliac spine of the CONTRALATERAL hemipelvis to block it. External hand on the internal aspect of the knee of the limb to be assessed.",
      "execution": "The therapist asks the patient to actively bring the limb on the side to be assessed into hip abduction (knee toward the table). When they can go no further or the knee contacts the table → the therapist exerts a little downward pressure on it. Measure the distance between the knee of the affected side and the table. Repeat on the contralateral limb.",
      "interpretation": "✅ Greater knee-to-table distance + pain → hip or sacroiliac joint dysfunction."
    },
    "image": "images/Test de Patrick-FABER.webp"
  },
  {
    "id": 29,
    "num": "46",
    "es": {
      "region": "🦴 CADERA",
      "name": "Prueba de Ober",
      "category": "Cintilla iliotibial (BIT)",
      "posPatient": "Decúbito lateral con la cadera INFERIOR en flexión.",
      "posTherapist": "Detrás del paciente con una mano estabilizando la hemipelvis a testar.",
      "execution": "1. Mano proximal estabiliza la pelvis.\n2. Mano caudal realiza extensión de rodilla y extensión de cadera del muslo superior (la pierna queda libre).\n3. La pierna libre (superior) se deja caer por acción de la gravedad para que aduzca la cadera tanto como sea posible hasta contactar la camilla.",
      "interpretation": "✅ La rodilla no contacta la camilla → acortamiento de la banda iliotibial."
    },
    "fr": {
      "region": "🦴 HANCHE",
      "name": "Test d'Ober",
      "category": "Bandelette ilio-tibiale (TFL)",
      "posPatient": "Décubitus latéral avec la hanche INFÉRIEURE en flexion.",
      "posTherapist": "Derrière le patient avec une main stabilisant l'hémibassin à tester.",
      "execution": "1. Main proximale stabilise le bassin.\n2. Main caudale réalise une extension de genou et une extension de hanche de la cuisse supérieure (la jambe reste libre).\n3. La jambe libre (supérieure) est relâchée sous l'action de la gravité pour adduire la hanche autant que possible jusqu'au contact avec la table.",
      "interpretation": "✅ Le genou ne touche pas la table → raccourcissement de la bandelette ilio-tibiale."
    },
    "en": {
      "region": "🦴 HIP",
      "name": "Ober's test",
      "category": "Iliotibial band (ITB)",
      "posPatient": "Side-lying position with the INFERIOR hip in flexion.",
      "posTherapist": "Behind the patient with one hand stabilizing the hemipelvis to be tested.",
      "execution": "1. Proximal hand stabilizes the pelvis.\n2. Caudal hand performs knee extension and hip extension of the upper thigh (the leg remains free).\n3. The free (upper) leg is allowed to drop by gravity to adduct the hip as much as possible until contacting the table.",
      "interpretation": "✅ The knee does not contact the table → shortening of the iliotibial band."
    },
    "image": "images/Prueba de Ober.webp"
  },
  {
    "id": 30,
    "num": "47",
    "es": {
      "region": "🦴 CADERA",
      "name": "Signo de Trendelenburg",
      "category": "Musculatura pélvica",
      "posPatient": "De pie, MMSS a lo largo del cuerpo.",
      "posTherapist": "De pie a la espalda del paciente, observándolo.",
      "execution": "El terapeuta pide al paciente que separe un pie del suelo mediante flexión de la articulación coxofemoral y de la rodilla del mismo lado → apoyo monopodal. Observar la postura adoptada. Repetir en el miembro contralateral.",
      "interpretation": "✅ Hemipelvis contralateral descendida en apoyo monopodal → afectación de la musculatura pélvica (glúteo medio)."
    },
    "fr": {
      "region": "🦴 HANCHE",
      "name": "Signe de Trendelenburg",
      "category": "Musculature pelvienne",
      "posPatient": "Debout, membres supérieurs le long du corps.",
      "posTherapist": "Debout derrière le patient, en train de l'observer.",
      "execution": "Le thérapeute demande au patient de décoller un pied du sol par flexion de l'articulation coxo-fémorale et du genou du même côté → appui monopodal. Observer la posture adoptée. Répéter sur le membre contralatéral.",
      "interpretation": "✅ Hémibassin contralatéral abaissé en appui monopodal → atteinte de la musculature pelvienne (moyen fessier)."
    },
    "en": {
      "region": "🦴 HIP",
      "name": "Trendelenburg's sign",
      "category": "Pelvic musculature",
      "posPatient": "Standing, upper limbs along the body.",
      "posTherapist": "Standing at the patient's back, observing them.",
      "execution": "The therapist asks the patient to lift one foot off the floor by flexing the hip and knee joints of the same side → single-leg stance. Observe the adopted posture. Repeat on the contralateral limb.",
      "interpretation": "✅ Contralateral hemipelvis drops during single-leg stance → pelvic musculature involvement (gluteus medius)."
    },
    "image": "images/Signo de Trendelenburg.webp"
  },
  {
    "id": 31,
    "num": "48",
    "es": {
      "region": "🦴 CADERA",
      "name": "Prueba de piriforme / rotadores",
      "category": "Musculatura pélvica",
      "posPatient": "Decúbito ventral con flexión de 70-80° de ambas rodillas, de forma que las plantas de los pies se encuentren orientadas hacia el techo.",
      "posTherapist": "Bipedestación próximo al borde inferior de la camilla en finta doble, orientado hacia la cabeza del paciente. Toma contacto con la palma de las manos sobre la región interna de cada uno de los dos pies.",
      "execution": "El paciente ha de mantener unidas ambas rodillas mientras el terapeuta ejerce una fuerza de separación de los tobillos.",
      "interpretation": "✅ Dolor glúteo y/o en recorrido ciático → posible espasmo o retracción del músculo piramidal con compresión del nervio ciático."
    },
    "fr": {
      "region": "🦴 HANCHE",
      "name": "Test du piriforme / rotateurs",
      "category": "Musculature pelvienne",
      "posPatient": "Décubitus ventral avec flexion de 70-80° des deux genoux, de sorte que les plantes des pieds soient orientées vers le plafond.",
      "posTherapist": "Debout près du bord inférieur de la table (fente double), orienté vers la tête du patient. Il pose la paume des mains sur la région interne de chacun des deux pieds.",
      "execution": "Le patient doit maintenir les deux genoux serrés pendant que le thérapeute exerce une force de séparation des chevilles.",
      "interpretation": "✅ Douleur fessière et/ou sur le trajet sciatique → possible spasme ou rétraction du muscle piriforme avec compression du nerf sciatique."
    },
    "en": {
      "region": "🦴 HIP",
      "name": "Piriformis / rotators test",
      "category": "Pelvic musculature",
      "posPatient": "Prone position with 70-80° flexion of both knees, so that the soles of the feet face the ceiling.",
      "posTherapist": "Standing close to the lower edge of the table (double lunge), facing the patient's head. Places the palms of the hands on the internal region of each foot.",
      "execution": "The patient must keep both knees together while the therapist exerts a separating force on the ankles.",
      "interpretation": "✅ Gluteal pain and/or pain along the sciatic nerve pathway → possible spasm or retraction of the piriformis muscle with sciatic nerve compression."
    },
    "image": "images/Prueba de piriforme-rotadores.webp"
  },
  {
    "id": 32,
    "num": "49",
    "es": {
      "region": "🦴 CADERA",
      "name": "Test de Squeeze",
      "category": "Musculatura pélvica (aductores)",
      "posPatient": "Decúbito supino con las piernas flexionadas bilateralmente de forma que los pies queden apoyados en el plano de la camilla.",
      "posTherapist": "De pie, lateralmente al paciente del lado a valorar. Coloca el PUÑO entre las rodillas del paciente.",
      "execution": "Se pide al paciente que contraiga bilateralmente la musculatura APROXIMADORA de la cadera uniendo las rodillas contra el puño del terapeuta.",
      "interpretation": "✅ Dolor durante la contracción aproximadora → lesión tendinosa de los aductores de cadera."
    },
    "fr": {
      "region": "🦴 HANCHE",
      "name": "Test de Squeeze",
      "category": "Musculature pelvienne (adducteurs)",
      "posPatient": "Décubitus dorsal avec les jambes fléchies bilatéralement de sorte que les pieds soient appuyés sur le plan de la table.",
      "posTherapist": "Debout, sur le côté du patient du côté à évaluer. Il place le POING entre les genoux du patient.",
      "execution": "Il est demandé au patient de contracter bilatéralement la musculature adductrice de la hanche en serrant les genoux contre le poing du thérapeute.",
      "interpretation": "✅ Douleur pendant la contraction adductrice → lésion tendineuse des adducteurs de la hanche."
    },
    "en": {
      "region": "🦴 HIP",
      "name": "Squeeze test",
      "category": "Pelvic musculature (adductors)",
      "posPatient": "Supine position with legs flexed bilaterally so that the feet rest on the table.",
      "posTherapist": "Standing, lateral to the patient on the side to be assessed. Places the FIST between the patient's knees.",
      "execution": "The patient is asked to bilaterally contract the hip adductor muscles, pressing the knees against the therapist's fist.",
      "interpretation": "✅ Pain during adductor contraction → tendinous injury of the hip adductors."
    },
    "image": "images/Test de squeeze.webp"
  },
  {
    "id": 33,
    "num": "50",
    "es": {
      "region": "🦴 CADERA",
      "name": "Prueba de Galeazzi-Allis",
      "category": "Asimetría de MMII",
      "posPatient": "Decúbito dorsal, brazos a lo largo del cuerpo, rodillas y caderas flexionadas de forma que las plantas de los pies estén en contacto con la camilla.",
      "posTherapist": "De pie, observando al paciente desde los pies.",
      "execution": "Observar la altura de las rodillas comparando ambos lados: se valora si existe diferencia de altura entre las dos rodillas en la misma posición.",
      "interpretation": "✅ Una rodilla más alta → tibia más larga. ✅ Una rodilla más baja → fémur más corto o displasia/luxación de cadera."
    },
    "fr": {
      "region": "🦴 HANCHE",
      "name": "Test de Galeazzi-Allis",
      "category": "Asymétrie des membres inférieurs",
      "posPatient": "Décubitus dorsal, bras le long du corps, genoux et hanches fléchis de manière à ce que les plantes des pieds soient en contact avec la table.",
      "posTherapist": "Debout, observant le patient depuis les pieds.",
      "execution": "Observer la hauteur des genoux en comparant les deux côtés : on évalue s'il existe une différence de hauteur entre les deux genoux dans la même position.",
      "interpretation": "✅ Un genou plus haut → tibia plus long. ✅ Un genou plus bas → fémur plus court ou dysplasie/luxation de la hanche."
    },
    "en": {
      "region": "🦴 HIP",
      "name": "Galeazzi-Allis test",
      "category": "Lower limb asymmetry",
      "posPatient": "Supine position, arms along the body, knees and hips flexed so that the soles of the feet are in contact with the table.",
      "posTherapist": "Standing, observing the patient from the feet.",
      "execution": "Observe the height of the knees comparing both sides: assesses whether there is a height difference between the two knees in the same position.",
      "interpretation": "✅ One knee higher → longer tibia. ✅ One knee lower → shorter femur or hip dysplasia/dislocation."
    },
    "image": "images/Prueba de Galeazzi-Allis.webp"
  },
  {
    "id": 34,
    "num": "51",
    "es": {
      "region": "🦴 CADERA",
      "name": "FADIR – Femoroacetabular impingement test",
      "category": "Impingement femoroacetabular",
      "posPatient": "Decúbito supino con las piernas estiradas y los brazos a lo largo del cuerpo.",
      "posTherapist": "De pie, lateralmente al paciente del lado a valorar, a la altura de la pelvis. Mano caudal a la altura del tobillo; mano proximal en cara externa de la rodilla del paciente.",
      "execution": "1. Flexión pasiva de cadera y rodilla a 90°.\n2. Desde ahí → aducción de cadera + rotación interna asociada a un valgo de rodilla.",
      "interpretation": "✅ Dolor inguinal → posible pinzamiento femoroacetabular, desgarro del labrum, cuerpos libres o lesión condral."
    },
    "fr": {
      "region": "🦴 HANCHE",
      "name": "FADIR – Test de conflit fémoro-acétabulaire",
      "category": "Conflit fémoro-acétabulaire",
      "posPatient": "Décubitus dorsal avec les jambes tendues et les bras le long du corps.",
      "posTherapist": "Debout, sur le côté du patient du côté à évaluer, à la hauteur du bassin. Main caudale à la hauteur de la cheville ; main proximale sur la face externe du genou du patient.",
      "execution": "1. Flexion passive de la hanche et du genou à 90°.\n2. De là → adduction de la hanche + rotation interne associée à un valgus du genou.",
      "interpretation": "✅ Douleur inguinale → possible conflit fémoro-acétabulaire, déchirure du labrum, corps libres ou lésion chondrale."
    },
    "en": {
      "region": "🦴 HIP",
      "name": "FADIR – Femoroacetabular impingement test",
      "category": "Femoroacetabular impingement",
      "posPatient": "Supine position with legs straight and arms along the body.",
      "posTherapist": "Standing, lateral to the patient on the side to be assessed, at pelvis height. Caudal hand at ankle height; proximal hand on the external aspect of the patient's knee.",
      "execution": "1. Passive flexion of hip and knee to 90°.\n2. From there → hip adduction + internal rotation associated with knee valgus.",
      "interpretation": "✅ Inguinal pain → possible femoroacetabular impingement, labral tear, loose bodies, or chondral lesion."
    },
    "image": "images/Femoroacetabular impingment test-FADIR.webp"
  },
  {
    "id": 35,
    "num": "52",
    "es": {
      "region": "🦵 RODILLA",
      "name": "Prueba de McMurray",
      "category": "Meniscopatías",
      "posPatient": "Decúbito dorsal con el miembro del lado a valorar en flexión coxofemoral y de rodilla, de forma que la planta del pie se encuentre apoyada sobre la camilla.",
      "posTherapist": "De pie, en el mismo lado de la pierna a evaluar, a la altura de las rodillas, en finta adelante en dirección craneal. Mano superior sobre la articulación de la rodilla en la interlínea articular EXTERNA. Mano inferior abarca el talón del pie homolateral por la zona interna, de forma que el borde medial del pie esté en contacto con el antebrazo del terapeuta.",
      "execution": "El terapeuta eleva la pierna del lado a valorar separando el talón de la camilla. Según el cuerno y menisco a valorar:\n• Cuerno posterior menisco INTERNO: desde flexión máxima → rotación externa de tibia + valgo de rodilla + extensión.\n• Cuerno posterior menisco EXTERNO: desde flexión máxima → rotación interna de tibia + varo de rodilla + extensión.\n⚠️ Hay que corroborar el resultado con otras pruebas.",
      "interpretation": "✅ Dolor o chasquido en la interlínea articular → posible lesión meniscal (cuerno según rotación aplicada)."
    },
    "fr": {
      "region": "🦵 GENOU",
      "name": "Test de McMurray",
      "category": "Méniscopathies",
      "posPatient": "Décubitus dorsal avec le membre du côté à évaluer en flexion coxo-fémorale et de genou, de sorte que la plante du pied soit appuyée sur la table.",
      "posTherapist": "Debout, du même côté que la jambe à évaluer, à la hauteur des genoux (fente avant en direction crâniale). Main supérieure sur l'articulation du genou au niveau de l'interligne articulaire EXTERNE. Main inférieure englobe le talon du pied homolatéral par la zone interne, de sorte que le bord médial du pied soit en contact avec l'avant-bras du thérapeute.",
      "execution": "Le thérapeute élève la jambe du côté à évaluer en décollant le talon de la table. Selon la corne et le ménisque à évaluer :\n• Corne postérieure du ménisque INTERNE : depuis la flexion maximale → rotation externe du tibia + valgus du genou + extension.\n• Corne postérieure du ménisque EXTERNE : depuis la flexion maximale → rotation interne du tibia + varus du genou + extension.\n⚠️ Il faut corroborer le résultat avec d'autres tests.",
      "interpretation": "✅ Douleur ou claquement dans l'interligne articulaire → possible lésion méniscale (corne selon la rotation appliquée)."
    },
    "en": {
      "region": "🦵 KNEE",
      "name": "McMurray test",
      "category": "Meniscal lesions",
      "posPatient": "Supine position with the limb of the side to be assessed in hip and knee flexion, so that the sole of the foot rests on the table.",
      "posTherapist": "Standing, on the same side as the leg to be evaluated, at knee height (lunge forward in a cranial direction). Superior hand on the knee joint at the EXTERNAL joint line. Inferior hand embraces the heel of the homolateral foot through the internal area, so that the medial border of the foot is in contact with the therapist's forearm.",
      "execution": "The therapist raises the leg of the side to be assessed, separating the heel from the table. Depending on the horn and meniscus to be evaluated:\n• Posterior horn of INTERNAL meniscus: from maximum flexion → external rotation of tibia + knee valgus + extension.\n• Posterior horn of EXTERNAL meniscus: from maximum flexion → internal rotation of tibia + knee varus + extension.\n⚠️ The result must be corroborated with other tests.",
      "interpretation": "✅ Pain or click in the joint line → possible meniscal injury (horn depending on the applied rotation)."
    },
    "image": "images/Prueba de McMurray.webp"
  },
  {
    "id": 36,
    "num": "53",
    "es": {
      "region": "🦵 RODILLA",
      "name": "Test de compresión de Apley",
      "category": "Meniscopatías",
      "posPatient": "Decúbito ventral con la rodilla del lado a valorar en flexión de 90°, de forma que la planta del pie homolateral esté orientada hacia el techo.",
      "posTherapist": "De pie, en el mismo lado de la rodilla que se valora, en finta doble a la altura de esta, orientado hacia el paciente. Mano inferior sobre la planta del pie del lado a evaluar. Mano superior sobre la porción posterior del tercio distal del muslo homolateral, bloqueándolo.",
      "execution": "A través del contacto de la mano caudal → rotación de la rodilla a un lado y hacia el otro.\nActo seguido: compresión hacia la camilla con mano caudal + sin modificar la compresión → rotaciones internas y externas de la tibia.\n💡 Variante en extensión de rodilla para valorar mejor los cuernos anteriores.\n⚠️ Realizar primero sin compresión (distracción) para descartar ligamentos.",
      "interpretation": "✅ Dolor sin compresión → estructuras ligamentosas. ✅ Dolor con compresión → posible lesión meniscal (cuerno según rotación)."
    },
    "fr": {
      "region": "🦵 GENOU",
      "name": "Test de compression d'Apley",
      "category": "Méniscopathies",
      "posPatient": "Décubitus ventral avec le genou du côté à évaluer en flexion de 90°, de sorte que la plante du pied homolatéral soit orientée vers le plafond.",
      "posTherapist": "Debout, du même côté que le genou évalué (fente double), à sa hauteur, orienté vers le patient. Main inférieure sur la plante du pied du côté à évaluer. Main supérieure sur la portion postérieure du tiers distal de la cuisse homolatérale, la bloquant.",
      "execution": "À travers le contact de la main caudale → rotation du genou d'un côté et de l'autre.\nJuste après : compression vers la table avec la main caudale + sans modifier la compression → rotations internes et externes du tibia.\n💡 Variante en extension de genou pour mieux évaluer les cornes antérieures.\n⚠️ Réaliser d'abord sans compression (distraction) pour écarter les ligaments.",
      "interpretation": "✅ Douleur sans compression → structures ligamentaires. ✅ Douleur avec compression → possible lésion méniscale (corne selon la rotation)."
    },
    "en": {
      "region": "🦵 KNEE",
      "name": "Apley's compression test",
      "category": "Meniscal lesions",
      "posPatient": "Prone position with the knee of the side to be assessed in 90° flexion, so that the sole of the homolateral foot faces the ceiling.",
      "posTherapist": "Standing, on the same side as the knee being assessed (double lunge) at its level, facing the patient. Inferior hand on the sole of the foot of the side to be evaluated. Superior hand on the posterior aspect of the distal third of the homolateral thigh, blocking it.",
      "execution": "Through caudal hand contact → rotation of the knee to one side and the other.\nImmediately after: compression toward the table with caudal hand + without changing the compression → internal and external rotations of the tibia.\n💡 Knee extension variant to better assess the anterior horns.\n⚠️ Perform first without compression (distraction) to rule out ligaments.",
      "interpretation": "✅ Pain without compression → ligamentous structures. ✅ Pain with compression → possible meniscal injury (horn depending on rotation)."
    },
    "image": "images/Test de compresión de Apley.webp"
  },
  {
    "id": 37,
    "num": "54",
    "es": {
      "region": "🦵 RODILLA",
      "name": "Glide test (desplazamiento de la rótula)",
      "category": "Movilidad rotuliana / Condropatía rotuliana",
      "posPatient": "Decúbito supino, brazos a lo largo del cuerpo, un rulo bajo las rodillas que se encuentran relajadas en ligera flexión.",
      "posTherapist": "De pie en el lado CONTRARIO a la pierna a evaluar, en finta doble a la altura de las rodillas del paciente, orientado hacia este. Toma contacto con el 1.er y 2.o dedos de ambas manos sobre los dos polos superior e inferior de la rótula del lado a valorar, abarcándola.",
      "execution": "Movilización de la rótula de un lateral a otro.\nSi durante la maniobra se observa elasticidad importante → puede solicitarse contracción isométrica del cuádriceps y repetir los desplazamientos.",
      "interpretation": "✅ Molestia y chasquido articular → condropatía rotuliana. ✅ Desplazamiento amplio → posible inestabilidad/luxación de rótula."
    },
    "fr": {
      "region": "🦵 GENOU",
      "name": "Glide test (déplacement de la rotule)",
      "category": "Mobilité rotulienne / Chondropathie rotulienne",
      "posPatient": "Décubitus dorsal, bras le long du corps, un rouleau sous les genoux qui sont relâchés en légère flexion.",
      "posTherapist": "Debout du côté OPPOSÉ à la jambe à évaluer (fente double) à la hauteur des genoux du patient, orienté vers celui-ci. Prend contact avec les 1er et 2ème doigts des deux mains sur les deux pôles supérieur et inférieur de la rotule du côté à évaluer, en l'englobant.",
      "execution": "Mobilisation de la rotule d'un côté à l'autre.\nSi une élasticité importante est observée pendant la manœuvre → une contraction isométrique du quadriceps peut être demandée et les déplacements répétés.",
      "interpretation": "✅ Gêne et claquement articulaire → chondropathie rotulienne. ✅ Déplacement important → possible instabilité/luxation de la rotule."
    },
    "en": {
      "region": "🦵 KNEE",
      "name": "Patellar glide test",
      "category": "Patellar mobility / Patellar chondropathy",
      "posPatient": "Supine position, arms along the body, a bolster under the knees which are relaxed in slight flexion.",
      "posTherapist": "Standing on the OPPOSITE side to the leg to be evaluated (double lunge) at the level of the patient's knees, facing them. Takes contact with the 1st and 2nd fingers of both hands on the superior and inferior poles of the patella of the side to be assessed, embracing it.",
      "execution": "Mobilization of the patella from one side to the other.\nIf significant laxity is observed during the maneuver → an isometric contraction of the quadriceps can be requested and glides repeated.",
      "interpretation": "✅ Discomfort and joint click → patellar chondropathy. ✅ Large displacement → possible patellar instability/dislocation."
    },
    "image": "images/Prueba de desplazamiento de la rotula (Glide test).webp"
  },
  {
    "id": 38,
    "num": "55",
    "es": {
      "region": "🦵 RODILLA",
      "name": "Prueba de aprehensión (rótula)",
      "category": "Movilidad rotuliana / Inestabilidad rotuliana",
      "posPatient": "Decúbito supino.",
      "posTherapist": "De pie junto a la rodilla del paciente.",
      "execution": "1. Terapeuta desliza la rótula hacia EXTERNO.\n2. A partir de ahí → produce una flexión de rodilla.\n3. El paciente evitará el movimiento y apartará la mano del fisioterapeuta ante la sensación de luxación.",
      "interpretation": "✅ Aprehensión o retirada de la mano → inestabilidad rotuliana con tendencia a la luxación."
    },
    "fr": {
      "region": "🦵 GENOU",
      "name": "Test d'appréhension (rotule)",
      "category": "Mobilité rotulienne / Instabilité rotulienne",
      "posPatient": "Décubitus dorsal.",
      "posTherapist": "Debout à côté du genou du patient.",
      "execution": "1. Le thérapeute glisse la rotule vers l'EXTÉRIEUR.\n2. À partir de là → produit une flexion du genou.\n3. Le patient évitera le mouvement et repoussera la main du kinésithérapeute face à la sensation de luxation.",
      "interpretation": "✅ Appréhension ou retrait de la main → instabilité rotulienne avec tendance à la luxation."
    },
    "en": {
      "region": "🦵 KNEE",
      "name": "Patellar apprehension test",
      "category": "Patellar mobility / Patellar instability",
      "posPatient": "Supine position.",
      "posTherapist": "Standing next to the patient's knee.",
      "execution": "1. Therapist glides the patella LATERALLY.\n2. From there → performs knee flexion.\n3. The patient will avoid the movement and pull away from the physiotherapist's hand upon sensing imminent dislocation.",
      "interpretation": "✅ Apprehension or hand withdrawal → patellar instability with a tendency to dislocate."
    },
    "image": "images/Prueba de aprehensión.webp"
  },
  {
    "id": 39,
    "num": "56",
    "es": {
      "region": "🦵 RODILLA",
      "name": "Signo de Clarke (opresión/crepitación rotuliana)",
      "category": "Movilidad rotuliana / Articulación femoropatelar",
      "posPatient": "Decúbito dorsal, MMSS a lo largo del cuerpo, rodillas en extensión.",
      "posTherapist": "Bipedestación del lado a valorar en finta doble, a la altura de las rodillas, orientado hacia el paciente. Mano craneal sobre el margen superior de la rótula del lado a evaluar (comisura 1.er-2.o dedo sobre porción superior de la rótula; 1.er dedo en borde externo, 2.o en borde interno).",
      "execution": "El paciente lleva a cabo una contracción del músculo CUÁDRICEPS del lado a valorar mientras el terapeuta impide el ascenso de la rótula con una compresión en dirección CAUDAL.\n💡 Realizarla bilateral y a distintos grados de flexión (30°, 60° y 90°) para más especificidad.",
      "interpretation": "✅ Dolor agudo en la rodilla → posible afectación de la articulación femoropatelar (condromalacia rotuliana)."
    },
    "fr": {
      "region": "🦵 GENOU",
      "name": "Signe de Clarke (oppression/crépitation rotulienne)",
      "category": "Mobilité rotulienne / Articulation fémoro-patellaire",
      "posPatient": "Décubitus dorsal, membres supérieurs le long du corps, genoux en extension.",
      "posTherapist": "Debout du côté à évaluer (fente double), à la hauteur des genoux, orienté vers le patient. Main crâniale sur le bord supérieur de la rotule du côté à évaluer (commissure du 1er-2ème doigt sur la portion supérieure de la rotule ; 1er doigt sur le bord externe, 2ème sur le bord interne).",
      "execution": "Le patient réalise une contraction du muscle QUADRICEPS du côté à évaluer tandis que le thérapeute empêche l'ascension de la rotule avec une compression en direction CAUDALE.\n💡 La réaliser de manière bilatérale et à différents degrés de flexion (30°, 60° et 90°) pour plus de spécificité.",
      "interpretation": "✅ Douleur aiguë au genou → possible atteinte de l'articulation fémoro-patellaire (chondromalacie rotulienne)."
    },
    "en": {
      "region": "🦵 KNEE",
      "name": "Clarke's sign (patellar grind test)",
      "category": "Patellar mobility / Patellofemoral joint",
      "posPatient": "Supine position, upper limbs along the body, knees extended.",
      "posTherapist": "Standing on the side to be assessed (double lunge) at knee height, facing the patient. Cranial hand on the superior margin of the patella of the side to be evaluated (web space of 1st-2nd finger over the superior portion of the patella; 1st finger on the external border, 2nd on the internal border).",
      "execution": "The patient performs a contraction of the QUADRICEPS muscle of the side to be assessed while the therapist prevents the upward glide of the patella with a CAUDAL compression.\n💡 Perform bilaterally and at different degrees of flexion (30°, 60°, and 90°) for more specificity.",
      "interpretation": "✅ Acute knee pain → possible patellofemoral joint involvement (chondromalacia patellae)."
    },
    "image": "images/Prueba de crepitación de rodilla-opresión roduliana (signo de Clarke).webp"
  },
  {
    "id": 40,
    "num": "57",
    "es": {
      "region": "🦵 RODILLA",
      "name": "Test de Lachman",
      "category": "Integridad LCA",
      "posPatient": "Decúbito dorsal con la rodilla del lado a valorar flexionada unos 20-30°, brazos a lo largo del cuerpo.",
      "posTherapist": "De pie en el mismo lado de la pierna a evaluar, en finta adelante a la altura de las tibias del paciente, orientado hacia este en dirección craneal. Mano superior sobre la porción anterolateral del tercio distal del fémur homolateral. Mano inferior abarca internamente el extremo proximal de la tibia (pulgar en parte anterior, resto de dedos bajo el hueco poplíteo).",
      "execution": "El terapeuta estabiliza el fémur a través de su contacto superior mientras induce de forma pasiva un desplazamiento ANTERIOR de la tibia con la mano inferior.",
      "interpretation": "✅ Desplazamiento anterior anormalmente aumentado de la tibia → posible desgarro del LCA."
    },
    "fr": {
      "region": "🦵 GENOU",
      "name": "Test de Lachman",
      "category": "Incorectement traduit: Integrité du LCA",
      "posPatient": "Décubitus dorsal avec le genou du côté à évaluer fléchi d'environ 20-30°, bras le long du corps.",
      "posTherapist": "Debout du même côté que la jambe à évaluer (fente avant à la hauteur des tibias), orienté vers lui en direction crâniale. Main supérieure sur la portion antérolatérale du tiers distal du fémur homolatéral. Main inférieure englobe de manière interne l'extrémité proximale du tibia (pouce sur la partie antérieure, reste des doigts sous le creux poplité).",
      "execution": "Le thérapeute stabilise le fémur via son contact supérieur tout en induisant passivement un déplacement ANTÉRIEUR du tibia avec la main inférieure.",
      "interpretation": "✅ Déplacement antérieur anormalement augmenté du tibia → possible déchirure du LCA."
    },
    "en": {
      "region": "🦵 KNEE",
      "name": "Lachman test",
      "category": "ACL integrity",
      "posPatient": "Supine position with the knee of the side to be assessed flexed about 20-30°, arms along the body.",
      "posTherapist": "Standing on the same side as the leg to be evaluated (lunge forward at tibia level), facing cranially. Superior hand on the anterolateral aspect of the distal third of the homolateral femur. Inferior hand embraces the proximal end of the tibia internally (thumb on the anterior part, remaining fingers under the popliteal fossa).",
      "execution": "The therapist stabilizes the femur through superior contact while passively inducing an ANTERIOR translation of the tibia with the inferior hand.",
      "interpretation": "✅ Abnormally increased anterior translation of the tibia → possible ACL tear."
    },
    "image": "images/Test de Lachmann.webp"
  },
  {
    "id": 41,
    "num": "58",
    "es": {
      "region": "🦵 RODILLA",
      "name": "Test del cajón anterior",
      "category": "Integridad LCA",
      "posPatient": "Decúbito dorsal, brazos a lo largo del cuerpo, cadera y rodilla del lado a valorar en flexión, planta del pie homolateral reposando sobre la camilla. Paciente RELAJADO (isquiotibiales y cuádriceps sin tensión).",
      "posTherapist": "Sedestación sobre el dorso del pie del lado a valorar en dirección craneal. Ambas manos abarcando el tercio proximal de la tibia: pulgares sobre la parte anterior en la interlínea articular femorotibial; resto de dedos entrelazados en el hueco poplíteo.",
      "execution": "Tracción anterior de la tibia del lado a valorar generando un desplazamiento anterior de esta con respecto al fémur.\n⚠️ El paciente debe estar completamente relajado para que la musculatura no altere el resultado.",
      "interpretation": "✅ Desplazamiento anterior aumentado de la tibia → posible afectación o rotura del LCA."
    },
    "fr": {
      "region": "🦵 GENOU",
      "name": "Test du tiroir antérieur",
      "category": "Integrité du LCA",
      "posPatient": "Décubitus dorsal, bras le long du corps, hanche et genou du côté à évaluer en flexion, plante du pied homolatéral reposant sur la table. Patient RELAXÉ (ischio-jambiers et quadriceps sans tension).",
      "posTherapist": "Assis sur le dos du pied du côté à évaluer en direction crâniale. Les deux mains englobent le tiers proximal du tibia : pouces sur la partie antérieure au niveau de l'interligne articulaire fémoro-tibial ; reste des doigts entrelacés dans le creux poplité.",
      "execution": "Traction antérieure du tibia du côté à évaluer générant un déplacement antérieur de celui-ci par rapport au fémur.\n⚠️ Le patient doit être complètement relâché pour que la musculature ne modifie pas le résultat.",
      "interpretation": "✅ Déplacement antérieur augmenté du tibia → possible atteinte ou rupture du LCA."
    },
    "en": {
      "region": "🦵 KNEE",
      "name": "Anterior drawer test",
      "category": "ACL integrity",
      "posPatient": "Supine position, arms along the body, hip and knee of the side to be assessed in flexion, sole of the homolateral foot resting on the table. Patient RELAXED (hamstrings and quadriceps without tension).",
      "posTherapist": "Sitting on the dorsum of the foot of the side to be assessed, facing cranially. Both hands embracing the proximal third of the tibia: thumbs on the anterior aspect at the femorotibial joint line; remaining fingers interlaced in the popliteal fossa.",
      "execution": "Anterior traction of the tibia of the side to be assessed generating an anterior translation relative to the femur.\n⚠️ The patient must be completely relaxed so that musculature does not alter the result.",
      "interpretation": "✅ Increased anterior translation of the tibia → possible ACL involvement or tear."
    },
    "image": "images/Test del cajón anterior.webp"
  },
  {
    "id": 42,
    "num": "59",
    "es": {
      "region": "🦵 RODILLA",
      "name": "Test del cajón posterior",
      "category": "Integridad LCP",
      "posPatient": "Decúbito dorsal, brazos a lo largo del cuerpo, cadera y rodilla del lado a valorar flexionadas, pie homolateral reposando sobre la camilla.",
      "posTherapist": "Sedestación sobre el dorso del pie del lado a valorar en dirección craneal. Ambas eminencias tenares sobre la parte anterior de los cóndilos tibiales: pulgares a ambos lados de la interlínea articular femorotibial; resto de dedos abrazando la parte posterior de la tibia.",
      "execution": "Empuje de la tibia en dirección POSTERIOR generando un desplazamiento posterior con respecto al fémur, produciendo rotación interna o externa según las estructuras estabilizadoras que se pretendan evaluar.",
      "interpretation": "✅ Desplazamiento posterior aumentado de la tibia → posible afectación del LCP."
    },
    "fr": {
      "region": "🦵 GENOU",
      "name": "Test du tiroir postérieur",
      "category": "Integrité du LCP",
      "posPatient": "Décubitus dorsal, bras le long du corps, hanche et genou du côté à évaluer fléchis, pied homolatéral reposant sur la table.",
      "posTherapist": "Assis sur le dos du pied du côté à évaluer en direction crâniale. Les deux éminences thénars sur la partie antérieure des condyles tibiaux : pouces des deux côtés de l'interligne articulaire fémoro-tibial ; reste des doigts embrassant la partie postérieure du tibia.",
      "execution": "Poussée du tibia en direction POSTÉRIEURE générant un déplacement postérieur par rapport au fémur, produisant une rotation interne ou externe selon les structures stabilisatrices que l'on cherche à évaluer.",
      "interpretation": "✅ Déplacement postérieur augmenté du tibia → possible atteinte du LCP."
    },
    "en": {
      "region": "🦵 KNEE",
      "name": "Posterior drawer test",
      "category": "PCL integrity",
      "posPatient": "Supine position, arms along the body, hip and knee of the side to be assessed flexed, homolateral foot resting on the table.",
      "posTherapist": "Sitting on the dorsum of the foot of the side to be assessed, facing cranially. Both thenar eminences on the anterior aspect of the tibial condyles: thumbs on both sides of the femorotibial joint line; remaining fingers bracing the posterior aspect of the tibia.",
      "execution": "Push of the tibia in a POSTERIOR direction generating a posterior translation relative to the femur, producing internal or external rotation depending on the stabilizing structures intended for evaluation.",
      "interpretation": "✅ Increased posterior translation of the tibia → possible PCL involvement."
    },
    "image": "images/Test del cajón posterior.webp"
  },
  {
    "id": 43,
    "num": "60",
    "es": {
      "region": "🦶 TOBILLO",
      "name": "Lunge test (carga flexión dorsal tobillo)",
      "category": "Movilidad flexión dorsal tobillo",
      "posPatient": "De pie, descalzo. Posición de zancada (lunge) con el pie a evaluar adelante y la rodilla alineada sobre el 2.o dedo del pie.",
      "posTherapist": "De pie observando al paciente de lado o de frente.",
      "execution": "1. El paciente avanza la rodilla hacia delante (movimiento de lunge) intentando que toque la pared sin que el talón se levante del suelo.\n2. Se mide la distancia máxima del pie a la pared (en cm) donde la rodilla aún puede tocarla sin despegar el talón.\n3. Se compara con el lado contralateral.\n💡 Referencia: ≥10 cm se considera rango funcional de flexión dorsal en carga.",
      "interpretation": "✅ Distancia <10 cm o menor que el lado contralateral → restricción de la flexión dorsal en carga (tríceps sural, rigidez articular o bloqueo anterior del astrágalo)."
    },
    "fr": {
      "region": "🦶 CHEVILLE",
      "name": "Lunge test (charge flexion dorsale cheville)",
      "category": "Mobilité flexion dorsale cheville",
      "posPatient": "Debout, pieds nus. Position de fente (lunge) avec le pied à évaluer en avant et le genou aligné sur le 2ème orteil.",
      "posTherapist": "Debout, observant le patient de côté ou de face.",
      "execution": "1. Le patient avance le genou vers l'avant (mouvement de fente) en essayant de toucher le mur sans décoller le talon du sol.\n2. La distance maximale du pied au mur (en cm) est mesurée là où le genou peut encore le toucher sans décoller le talon.\n3. Comparer avec le côté contralatéral.\n💡 Référence : ≥10 cm est considéré comme une amplitude fonctionnelle de flexion dorsale en charge.",
      "interpretation": "✅ Distance <10 cm ou inférieure au côté contralatéral → restriction de la flexion dorsale en charge (triceps sural, raideur articulaire ou blocage antérieur de l'astragale)."
    },
    "en": {
      "region": "🦶 ANKLE",
      "name": "Weight-bearing lunge test (ankle dorsiflexion)",
      "category": "Ankle dorsiflexion mobility",
      "posPatient": "Standing, barefoot. Lunge position with the foot to be assessed in front and the knee aligned over the 2nd toe.",
      "posTherapist": "Standing, observing the patient from the side or front.",
      "execution": "1. The patient advances the knee forward (lunge movement) attempting to touch the wall without the heel lifting from the floor.\n2. The maximum distance from the foot to the wall (in cm) is measured where the knee can still touch it without lifting the heel.\n3. Compared with the contralateral side.\n💡 Reference: ≥10 cm is considered a functional weight-bearing dorsiflexion range.",
      "interpretation": "✅ Distance <10 cm or less than the contralateral side → restriction of weight-bearing dorsiflexion (triceps surae, joint stiffness, or anterior talar pinch)."
    },
    "image": "images/Test de carga flexión dorsal (Lunge test).webp"
  },
  {
    "id": 44,
    "num": "26",
    "es": {
      "region": "💪 HOMBRO",
      "name": "Prueba de Aprehensión (crank test) – Labrum",
      "category": "Inestabilidad hombro / Labrum",
      "posPatient": "Decúbito supino sobre la camilla.",
      "posTherapist": "De pie lateral al paciente, a nivel del hombro a evaluar.",
      "execution": "1. Terapeuta lleva el hombro a 90° de abducción.\n2. Flexiona el codo a 90°.\n3. Realiza una rotación externa pasiva progresiva del hombro.\n4. Puede añadir una presión anterior sobre la cabeza del húmero.",
      "interpretation": "✅ Aprehensión (miedo a la luxación) o dolor anterior → inestabilidad glenohumeral anterior o lesión del labrum."
    },
    "fr": {
      "region": "💪 ÉPAULE",
      "name": "Test d'appréhension (crank test) – Labrum",
      "category": "Instabilité de l'épaule / Labrum",
      "posPatient": "Décubitus dorsal sur la table.",
      "posTherapist": "Debout sur le côté du patient, au niveau de l'épaule à évaluer.",
      "execution": "1. Le thérapeute amène l'épaule à 90° d'abduction.\n2. Fléchit le coude à 90°.\n3. Réalise une rotation externe passive progressive de l'épaule.\n4. Peut ajouter une pression antérieure sur la tête de l'humérus.",
      "interpretation": "✅ Appréhension (peur de la luxation) ou douleur antérieure → instabilité gléno-humérale antérieure ou lésion du labrum."
    },
    "en": {
      "region": "💪 SHOULDER",
      "name": "Apprehension test (crank test) – Labrum",
      "category": "Shoulder instability / Labrum",
      "posPatient": "Supine position on the table.",
      "posTherapist": "Standing lateral to the patient, at the level of the shoulder to be evaluated.",
      "execution": "1. Therapist brings the shoulder to 90° abduction.\n2. Flexes the elbow to 90°.\n3. Performs a progressive passive external rotation of the shoulder.\n4. Can add anterior pressure over the humeral head.",
      "interpretation": "✅ Apprehension (fear of dislocation) or anterior pain → anterior glenohumeral instability or labral tear."
    },
    "image": "images/Prueba de Aprehensión (crank test) - Labrum.webp"
  },
  {
    "id": 45,
    "num": "27",
    "es": {
      "region": "💪 HOMBRO",
      "name": "Test de O'Brien (Labrum)",
      "category": "Inestabilidad hombro / Labrum",
      "posPatient": "De pie o sentado.",
      "posTherapist": "De pie delante o al lado del paciente.",
      "execution": "1. Brazo en flexión de 90° con 10° de aducción horizontal.\n2. FASE A: Rotación interna máxima (pulgar hacia el suelo) → terapeuta presiona hacia abajo.\n3. FASE B: Rotación NEUTRA (palma hacia arriba) → terapeuta presiona hacia abajo.",
      "interpretation": "✅ Dolor/chasquido en fase A (rot. interna) que mejora en fase B (rot. neutra) → lesión del labrum superior (SLAP) o afectación acromioclavicular."
    },
    "fr": {
      "region": "💪 ÉPAULE",
      "name": "Test d'O'Brien (Labrum)",
      "category": "Instabilité de l'épaule / Labrum",
      "posPatient": "Debout ou assis.",
      "posTherapist": "Debout devant ou à côté du patient.",
      "execution": "1. Bras en flexion à 90° avec 10° d'adduction horizontale.\n2. PHASE A : Rotation interne maximale (pouce vers le sol) → le thérapeute pousse vers le bas.\n3. PHASE B : Rotation NEUTRE (paume vers le haut) → le thérapeute pousse vers le bas.",
      "interpretation": "✅ Douleur/claquement en phase A (rot. interne) qui s'améliore en phase B (rot. neutre) → ligne de rupture du labrum supérieur (SLAP) ou atteinte acromio-claviculaire."
    },
    "en": {
      "region": "💪 SHOULDER",
      "name": "O'Brien's test (Labrum)",
      "category": "Shoulder instability / Labrum",
      "posPatient": "Standing or seated.",
      "posTherapist": "Standing in front of or next to the patient.",
      "execution": "1. Arm in 90° flexion with 10° horizontal adduction.\n2. PHASE A: Maximum internal rotation (thumb pointing down) → therapist presses downward.\n3. PHASE B: NEUTRAL rotation (palm facing up) → therapist presses downward.",
      "interpretation": "✅ Pain/click in phase A (internal rot.) that improves in phase B (neutral rot.) → superior labrum tear (SLAP) or acromioclavicular involvement."
    },
    "image": "images/Test de O’Brien (Labrum).webp"
  },
  {
    "id": 46,
    "num": "28",
    "es": {
      "region": "💪 HOMBRO",
      "name": "Test de Hawkins y Kennedy",
      "category": "Pinzamiento subacromial",
      "posPatient": "Sentado con brazos paralelos al tronco y manos sobre muslos, o de pie con miembros a lo largo del cuerpo.",
      "posTherapist": "De pie lateral al paciente (finta doble). Mano anterior abarca la combinación del codo; mano posterior contacta la parte superior del hombro (pulgar sobre acromion, demás dedos sobre extremo externo de clavícula).",
      "execution": "1. Inducir flexión de codo a 90°.\n2. Llevar el brazo a 90° de abducción.\n3. Realizar flexión horizontal de 45°.\n4. Rotación interna de la glenohumeral (mano hacia el suelo).\n5. Punto fijo en parte superior del hombro con mano posterior + elevar el codo con mano anterior.",
      "interpretation": "✅ Dolor agudo en el hombro → posible pinzamiento subacromial (supraespinoso, bíceps, bursa)."
    },
    "fr": {
      "region": "💪 ÉPAULE",
      "name": "Test de Hawkins et Kennedy",
      "category": "Conflit sous-acromial",
      "posPatient": "Assis avec les bras parallèles au tronc et les mains sur les cuisses, ou debout avec les membres le long du corps.",
      "posTherapist": "Debout sur le côté du patient (fente double). Main antérieure englobe l'articulation du coude ; main postérieure contacte la partie supérieure de l'épaule (pouce sur l'acromion, autres doigts sur l'extrémité externe de la clavicule).",
      "execution": "1. Induire une flexion du coude à 90°.\n2. Amener le bras à 90° d'abduction.\n3. Réaliser une flexion horizontale à 45°.\n4. Rotation interne de la gléno-humérale (main vers le sol).\n5. Point fixe sur la partie supérieure de l'épaule avec la main postérieure + élever le coude avec la main antérieure.",
      "interpretation": "✅ Douleur aiguë à l'épaule → possible conflit sous-acromial (supra-épineux, biceps, bourse)."
    },
    "en": {
      "region": "💪 SHOULDER",
      "name": "Hawkins-Kennedy test",
      "category": "Subacromial impingement",
      "posPatient": "Seated with arms parallel to the trunk and hands on thighs, or standing with limbs along the body.",
      "posTherapist": "Standing lateral to the patient (double lunge). Anterior hand embraces the elbow joint; posterior hand contacts the superior aspect of the shoulder (thumb on acromion, other fingers on the external end of the clavicle).",
      "execution": "1. Induce 90° elbow flexion.\n2. Bring the arm to 90° abduction.\n3. Perform 45° horizontal flexion.\n4. Internal rotation of the glenohumeral joint (hand pointing down).\n5. Fixed point on the superior aspect of the shoulder with posterior hand + raise the elbow with anterior hand.",
      "interpretation": "✅ Acute shoulder pain → possible subacromial impingement (supraspinatus, biceps, bursa)."
    },
    "image": "images/Test de Hawkins y Kennedy.webp"
  },
  {
    "id": 47,
    "num": "29",
    "es": {
      "region": "💪 HOMBRO",
      "name": "Test del Neer",
      "category": "Pinzamiento subacromial",
      "posPatient": "Sentado, brazos paralelos al cuerpo, manos sobre muslos (o de pie, brazos a lo largo del cuerpo).",
      "posTherapist": "De pie lateral al paciente (finta doble). Mano posterior contacta la escápula (porción dorsal). Mano anterior abarca el tercio proximal del cúbito homolateral.",
      "execution": "1. Terapeuta orienta la palma de la mano del lado a evaluar hacia el suelo → rotación interna máxima de la glenohumeral.\n2. Manteniendo el codo en extensión → conduce el hombro hacia FLEXIÓN MÁXIMA.",
      "interpretation": "✅ Dolor agudo en el hombro → pinzamiento subacromial (supraespinoso y tendón largo del bíceps)."
    },
    "fr": {
      "region": "💪 ÉPAULE",
      "name": "Test de Neer",
      "category": "Conflit sous-acromial",
      "posPatient": "Assis, bras parallèles au corps, mains sur les cuisses (ou debout, bras le long du corps).",
      "posTherapist": "Debout sur le côté du patient (fente double). Main postérieure contacte l'omoplate (portion dorsale). Main antérieure englobe le tiers proximal du cubitus homolatéral.",
      "execution": "1. Le thérapeute oriente la paume de la main du côté à évaluer vers le sol → rotation interne maximale de la gléno-humérale.\n2. En maintenant le coude en extension → conduit l'épaule vers une FLEXION MAXIMALE.",
      "interpretation": "✅ Douleur aiguë à l'épaule → conflit sous-acromial (supra-épineux et long tendon du biceps)."
    },
    "en": {
      "region": "💪 SHOULDER",
      "name": "Neer test",
      "category": "Subacromial impingement",
      "posPatient": "Seated, arms parallel to the body, hands on thighs (or standing, arms along the body).",
      "posTherapist": "Standing lateral to the patient (double lunge). Posterior hand contacts the scapula (dorsal portion). Anterior hand embraces the proximal third of the ipsilateral ulna.",
      "execution": "1. Therapist orients the palm of the hand on the side to be evaluated toward the floor → maximum internal rotation of the glenohumeral joint.\n2. Keeping the elbow in extension → guides the shoulder into MAXIMUM FLEXION.",
      "interpretation": "✅ Acute shoulder pain → subacromial impingement (supraspinatus and long head of biceps tendon)."
    },
    "image": "images/Test del Neer.webp"
  },
  {
    "id": 48,
    "num": "30",
    "es": {
      "region": "💪 HOMBRO",
      "name": "Test de Yocum",
      "category": "Pinzamiento subacromial",
      "posPatient": "Sentado. Palma de la mano del lado a valorar sobre el hombro contralateral.",
      "posTherapist": "De pie a la espalda del paciente. Mano externa sobre el codo homolateral; otra mano en el dorso de los dedos del paciente.",
      "execution": "Paciente eleva el codo hacia el techo SIN despegar la mano del hombro contralateral, mientras el terapeuta ofrece RESISTENCIA.",
      "interpretation": "✅ Dolor anterior en el hombro → posible afectación subacromial."
    },
    "fr": {
      "region": "💪 ÉPAULE",
      "name": "Test de Yocum",
      "category": "Conflit sous-acromial",
      "posPatient": "Assis. Paume de la main du côté à évaluer sur l'épaule controlatérale.",
      "posTherapist": "Debout dans le dos du patient. Main externe sur le coude homolatéral ; autre main sur le dos des doigts du patient.",
      "execution": "Le patient élève le coude vers le plafond SANS décoller la main de l'épaule controlatérale, tandis que le thérapeute offre une RÉSISTANCE.",
      "interpretation": "✅ Douleur antérieure à l'épaule → possible atteinte sous-acromiale."
    },
    "en": {
      "region": "💪 SHOULDER",
      "name": "Yocum test",
      "category": "Subacromial impingement",
      "posPatient": "Seated. Palm of the hand on the side to be evaluated resting on the contralateral shoulder.",
      "posTherapist": "Standing behind the patient. Outer hand on the ipsilateral elbow; other hand on the back of the patient's fingers.",
      "execution": "Patient raises the elbow toward the ceiling WITHOUT lifting the hand from the contralateral shoulder, while the therapist provides RESISTANCE.",
      "interpretation": "✅ Anterior shoulder pain → possible subacromial involvement."
    },
    "image": "images/Test de Yocum.webp"
  },
  {
    "id": 49,
    "num": "31",
    "es": {
      "region": "💪 HOMBRO",
      "name": "Drop arm test",
      "category": "Valorar supraespinoso",
      "posPatient": "Sentado o de pie, brazos a lo largo del cuerpo.",
      "posTherapist": "De pie detrás. Mano externa en muñeca homolateral; otra mano en escápula.",
      "execution": "1. Separación glenohumeral pasiva de 90-120° con codo en extensión.\n2. Pedir al paciente que MANTENGA el brazo en esa postura.\n3. Pedir que lo lleve LENTAMENTE a la posición inicial.",
      "interpretation": "✅ Incapacidad de mantener o bajar lentamente el brazo → posible disfunción o rotura del supraespinoso."
    },
    "fr": {
      "region": "💪 ÉPAULE",
      "name": "Drop arm test",
      "category": "Évaluation du supra-épineux",
      "posPatient": "Assis ou debout, bras le long du corps.",
      "posTherapist": "Debout derrière. Main externe sur le poignet homolatéral ; autre main sur l'omoplate.",
      "execution": "1. Abduction gléno-humérale passive à 90-120° avec le coude en extension.\n2. Demander au patient de MAINTENIR le bras dans cette position.\n3. Demander de le ramener LENTEMENT à la position initiale.",
      "interpretation": "✅ Incapacité à maintenir ou abaisser lentement le bras → possible dysfonction ou rupture du supra-épineux."
    },
    "en": {
      "region": "💪 SHOULDER",
      "name": "Drop arm test",
      "category": "Supraspinatus assessment",
      "posPatient": "Seated or standing, arms along the body.",
      "posTherapist": "Standing behind. Outer hand on the ipsilateral wrist; other hand on the scapula.",
      "execution": "1. Passive glenohumeral abduction to 90-120° with elbow in extension.\n2. Ask the patient to HOLD the arm in that position.\n3. Ask them to lower it SLOWLY to the starting position.",
      "interpretation": "✅ Inability to hold or slowly lower the arm → possible supraspinatus dysfunction or tear."
    },
    "image": "images/Drop arm test.webp"
  },
  {
    "id": 50,
    "num": "32",
    "es": {
      "region": "💪 HOMBRO",
      "name": "Prueba de Jobe",
      "category": "Valorar supraespinoso",
      "posPatient": "Sedestación. Miembro en separación de 90° + 30° de aproximación anterior, en ROTACIÓN INTERNA y PRONACIÓN.",
      "posTherapist": "De pie detrás. Mano interna en hombro; mano externa en articulación radiocubital inferior.",
      "execution": "Paciente MANTIENE la posición mientras el terapeuta realiza un empuje hacia el suelo.",
      "interpretation": "✅ Dolor o incapacidad de mantener la postura → afectación del tendón del supraespinoso."
    },
    "fr": {
      "region": "💪 ÉPAULE",
      "name": "Test de Jobe",
      "category": "Évaluation du supra-épineux",
      "posPatient": "En position assise. Membre en abduction de 90° + 30° d'adduction antérieure, en ROTATION INTERNE et PRONATION.",
      "posTherapist": "Debout derrière. Main interne sur l'épaule ; main externe sur l'articulation radio-cubitale inférieure.",
      "execution": "Le patient MAINTIENT la position tandis que le thérapeute exerce une poussée vers le sol.",
      "interpretation": "✅ Douleur ou incapacité à maintenir la posture → atteinte du tendon du supra-épineux."
    },
    "en": {
      "region": "💪 SHOULDER",
      "name": "Jobe test (empty can)",
      "category": "Supraspinatus assessment",
      "posPatient": "Seated. Arm at 90° abduction + 30° anterior adduction, in INTERNAL ROTATION and PRONATION (thumb pointing down).",
      "posTherapist": "Standing behind. Inner hand on the shoulder; outer hand on the distal radioulnar joint.",
      "execution": "Patient HOLDS the position while the therapist pushes the arm downward.",
      "interpretation": "✅ Pain or inability to maintain the position → supraspinatus tendon involvement."
    },
    "image": "images/Prueba de Jobe.webp"
  },
  {
    "id": 51,
    "num": "33",
    "es": {
      "region": "💪 HOMBRO",
      "name": "Signo de Hornblower",
      "category": "Valorar infraespinoso / Redondo menor",
      "posPatient": "De pie o sentado.",
      "posTherapist": "Observación.",
      "execution": "Se pide al paciente que se TOQUE LA BOCA con ambas manos.",
      "interpretation": "✅ Eleva el codo por encima del hombro para llegar a la boca → insuficiencia completa de infraespinoso y redondo menor."
    },
    "fr": {
      "region": "💪 ÉPAULE",
      "name": "Signe du Hornblower",
      "category": "Évaluation de l'infra-épineux / Petit rond",
      "posPatient": "Debout ou assis.",
      "posTherapist": "Observation.",
      "execution": "On demande au patient de se TOUCHER LA BOUCHE avec les deux mains.",
      "interpretation": "✅ Élève le coude au-dessus de l'épaule pour atteindre la bouche → insuffisance complète de l'infra-épineux et du petit rond."
    },
    "en": {
      "region": "💪 SHOULDER",
      "name": "Hornblower's sign",
      "category": "Infraspinatus / Teres minor assessment",
      "posPatient": "Standing or seated.",
      "posTherapist": "Observation.",
      "execution": "Ask the patient to TOUCH THEIR MOUTH with both hands.",
      "interpretation": "✅ Patient raises the elbow above the shoulder to reach the mouth → complete insufficiency of infraspinatus and teres minor."
    },
    "image": "images/Test de compresión (images sup).webp"
  },
  {
    "id": 52,
    "num": "34",
    "es": {
      "region": "💪 HOMBRO",
      "name": "Prueba de Patte",
      "category": "Valorar infraespinoso",
      "posPatient": "Sedestación. Miembro en ABDUCCIÓN de 90° y FLEXIÓN de codo de 90°.",
      "posTherapist": "De pie a la espalda. Mano interna en escápula; mano externa en articulación radiocubital inferior.",
      "execution": "Paciente lleva la mano hacia el terapeuta en ROTACIÓN EXTERNA. El terapeuta RESISTE el movimiento.",
      "interpretation": "✅ Dolor posterior en el hombro → posible afectación del tendón del infraespinoso."
    },
    "fr": {
      "region": "💪 ÉPAULE",
      "name": "Test de Patte",
      "category": "Évaluation de l'infra-épineux",
      "posPatient": "En position assise. Membre en ABDUCTION de 90° et FLEXION du coude de 90°.",
      "posTherapist": "Debout dans le dos. Main interne sur l'omoplate ; main externe sur l'articulation radio-cubitale inférieure.",
      "execution": "Le patient amène la main vers le thérapeute en ROTATION EXTERNE. Le thérapeute RÉSISTE au mouvement.",
      "interpretation": "✅ Douleur postérieure à l'épaule → possible atteinte du tendon de l'infra-épineux."
    },
    "en": {
      "region": "💪 SHOULDER",
      "name": "Patte test",
      "category": "Infraspinatus assessment",
      "posPatient": "Seated. Arm in 90° ABDUCTION and 90° elbow FLEXION.",
      "posTherapist": "Standing behind. Inner hand on the scapula; outer hand on the distal radioulnar joint.",
      "execution": "Patient moves the hand toward the therapist in EXTERNAL ROTATION. Therapist RESISTS the movement.",
      "interpretation": "✅ Posterior shoulder pain → possible infraspinatus tendon involvement."
    },
    "image": "images/Prueba de Patte.webp"
  },
  {
    "id": 53,
    "num": "35",
    "es": {
      "region": "💪 HOMBRO",
      "name": "Prueba de Gerber (lift-off)",
      "category": "Valorar subescapular",
      "posPatient": "Sedestación. Miembro en extensión + aproximación posterior + rotación interna, codo en flexión → dorso de la mano sobre apófisis espinosas torácicas.",
      "posTherapist": "De pie a la espalda. Mano externa en espina escapular; otra mano en la mano del paciente.",
      "execution": "Paciente separa la mano de la espalda (dirección POSTERIOR). El terapeuta aplica RESISTENCIA.",
      "interpretation": "✅ Dolor e incapacidad de separar la mano de la espalda → afectación del músculo subescapular."
    },
    "fr": {
      "region": "💪 ÉPAULE",
      "name": "Test de Gerber (lift-off)",
      "category": "Évaluation du sous-scapulaire",
      "posPatient": "En position assise. Membre en extension + adduction postérieure + rotation interne, coude en flexion → dos de la main sur les apophyses épineuses thoraciques.",
      "posTherapist": "Debout dans le dos. Main externe sur l'épine de l'omoplate ; autre main sur la main du patient.",
      "execution": "Le patient décolle la main du dos (direction POSTÉRIEURE). Le thérapeute applique une RÉSISTANCE.",
      "interpretation": "✅ Douleur et incapacité à décoller la main du dos → atteinte du muscle sous-scapulaire."
    },
    "en": {
      "region": "💪 SHOULDER",
      "name": "Gerber lift-off test",
      "category": "Subscapularis assessment",
      "posPatient": "Seated. Arm in extension + posterior adduction + internal rotation, elbow flexed → back of hand placed on thoracic spinous processes.",
      "posTherapist": "Standing behind. Outer hand on the scapular spine; other hand on the patient's hand.",
      "execution": "Patient lifts the hand away from the back (POSTERIORLY). Therapist applies RESISTANCE.",
      "interpretation": "✅ Pain and inability to lift the hand off the back → subscapularis muscle involvement."
    },
    "image": "images/Signo de mantenimiento de la rotación interna (prueba de Gerber).webp"
  },
  {
    "id": 54,
    "num": "36",
    "es": {
      "region": "💪 HOMBRO",
      "name": "Prueba de Yergason",
      "category": "Bíceps braquial – SLAP",
      "posPatient": "Sentado. Codo en flexión de 90°, palma en PRONACIÓN.",
      "posTherapist": "Delante. Yemas sobre la CORREDERA BICIPITAL; otra mano en muñeca.",
      "execution": "Paciente realiza SUPINACIÓN del antebrazo + FLEXIÓN del codo simultáneamente. El terapeuta RESISTE ambos movimientos.",
      "interpretation": "✅ Dolor en el tendón de la porción larga del bíceps → tendinitis o rotura del ligamento transverso (posible luxación del tendón)."
    },
    "fr": {
      "region": "💪 ÉPAULE",
      "name": "Test de Yergason",
      "category": "Biceps brachial – SLAP",
      "posPatient": "Assis. Coude en flexion à 90°, paume en PRONATION.",
      "posTherapist": "En face. Pulpes des doigts sur la COULISSE BICIPITALE ; autre main sur le poignet.",
      "execution": "Le patient réalise une SUPINATION de l'avant-bras + FLEXION du coude simultanément. Le thérapeute RÉSISTE aux deux mouvements.",
      "interpretation": "✅ Douleur sur le tendon du long biceps → tendinite ou rupture du ligament transverse (possible luxation du tendon)."
    },
    "en": {
      "region": "💪 SHOULDER",
      "name": "Yergason's test",
      "category": "Biceps brachii – SLAP",
      "posPatient": "Seated. Elbow in 90° flexion, palm in PRONATION.",
      "posTherapist": "Facing the patient. Fingertips over the BICIPITAL GROOVE; other hand on the wrist.",
      "execution": "Patient performs forearm SUPINATION + elbow FLEXION simultaneously. Therapist RESISTS both movements.",
      "interpretation": "✅ Pain over the long head of biceps tendon → tendinitis or transverse ligament tear (possible tendon subluxation)."
    },
    "image": "images/Prueba de Yergarson.webp"
  },
  {
    "id": 55,
    "num": "37",
    "es": {
      "region": "💪 HOMBRO",
      "name": "Prueba de Speed",
      "category": "Bíceps braquial – SLAP",
      "posPatient": "De pie o sentado. Miembro en FLEXIÓN de 90°, codo en EXTENSIÓN, antebrazo en SUPINACIÓN.",
      "posTherapist": "De pie lateral. Mano posterior palpando CORREDERA BICIPITAL; mano anterior en tercio distal del cúbito.",
      "execution": "Paciente FLEXIONA aún más la glenohumeral. El terapeuta RESISTE llevando el brazo hacia el suelo.",
      "interpretation": "✅ Dolor o incapacidad de vencer la resistencia → posible afectación del tendón de la porción larga del bíceps braquial."
    },
    "fr": {
      "region": "💪 ÉPAULE",
      "name": "Test de Speed",
      "category": "Biceps brachial – SLAP",
      "posPatient": "Debout ou assis. Membre en FLEXION à 90°, coude en EXTENSION, avant-bras en SUPINATION.",
      "posTherapist": "Debout sur le côté. Main postérieure palpant la COULISSE BICIPITALE ; main antérieure sur le tiers distal du cubitus.",
      "execution": "Le patient FLÉCHIT davantage la gléno-humérale. Le thérapeute RÉSISTE en amenant le bras vers le sol.",
      "interpretation": "✅ Douleur ou incapacité à vaincre la résistance → possible atteinte du tendon du long biceps brachial."
    },
    "en": {
      "region": "💪 SHOULDER",
      "name": "Speed's test",
      "category": "Biceps brachii – SLAP",
      "posPatient": "Standing or seated. Arm in 90° FLEXION, elbow in EXTENSION, forearm in SUPINATION.",
      "posTherapist": "Standing to the side. Posterior hand palpating the BICIPITAL GROOVE; anterior hand on the distal third of the ulna.",
      "execution": "Patient further FLEXES the glenohumeral joint. Therapist RESISTS by pushing the arm toward the floor.",
      "interpretation": "✅ Pain or inability to overcome resistance → possible long head of biceps brachii tendon involvement."
    },
    "image": "images/Prueba de Speed.webp"
  },
  {
    "id": 56,
    "num": "38",
    "es": {
      "region": "🦾 CODO",
      "name": "Test de Tinel (codo – túnel cubital)",
      "category": "Síndrome túnel cubital",
      "posPatient": "Codo en ligera flexión.",
      "posTherapist": "Frente al codo del paciente.",
      "execution": "Percutir con el dedo sobre el NERVIO CUBITAL en el surco epitrocleo-olecraneano (cara interna del codo).",
      "interpretation": "✅ Parestesias irradiadas al 4.º y 5.º dedo → atrapamiento del nervio cubital en el túnel cubital."
    },
    "fr": {
      "region": "🦾 COUDE",
      "name": "Signe de Tinel (coude – tunnel cubital)",
      "category": "Syndrome du tunnel cubital",
      "posPatient": "Coude en légère flexion.",
      "posTherapist": "En face du coude du patient.",
      "execution": "Percuter avec le doigt sur le NERF CUBITAL dans le sillon épitrochléo-olécrânien (face interne du coude).",
      "interpretation": "✅ Paresthésies irradiant aux 4e et 5e doigts → compression du nerf cubital dans le tunnel cubital."
    },
    "en": {
      "region": "🦾 ELBOW",
      "name": "Tinel's sign (elbow – cubital tunnel)",
      "category": "Cubital tunnel syndrome",
      "posPatient": "Elbow in slight flexion.",
      "posTherapist": "Facing the patient's elbow.",
      "execution": "Tap with a finger over the ULNAR NERVE in the epitrochleo-olecranon groove (medial aspect of the elbow).",
      "interpretation": "✅ Paresthesias radiating to the 4th and 5th fingers → ulnar nerve entrapment in the cubital tunnel."
    },
    "image": "images/Signo de Tinel.webp"
  },
  {
    "id": 57,
    "num": "39",
    "es": {
      "region": "🦾 CODO",
      "name": "Test de Mills",
      "category": "Musculatura epicondílea (epicondilitis lateral)",
      "posPatient": "De pie o sentado.",
      "posTherapist": "De pie frente al paciente.",
      "execution": "1. Palpar el epicóndilo lateral.\n2. Extensión completa del codo.\n3. Pronación del antebrazo.\n4. Flexión de muñeca.",
      "interpretation": "✅ Dolor en el epicóndilo lateral → afectación de la musculatura epicondílea (epicondilitis lateral)."
    },
    "fr": {
      "region": "🦾 COUDE",
      "name": "Test de Mills",
      "category": "Musculature épicondylienne (épicondylite latérale)",
      "posPatient": "Debout ou assis.",
      "posTherapist": "Debout face au patient.",
      "execution": "1. Palper l'épicondyle latéral.\n2. Extension complète du coude.\n3. Pronation de l'avant-bras.\n4. Flexion du poignet.",
      "interpretation": "✅ Douleur à l'épicondyle latéral → atteinte de la musculature épicondylienne (épicondylite latérale)."
    },
    "en": {
      "region": "🦾 ELBOW",
      "name": "Mills test",
      "category": "Epicondylar muscles (lateral epicondylitis)",
      "posPatient": "Standing or seated.",
      "posTherapist": "Standing facing the patient.",
      "execution": "1. Palpate the lateral epicondyle.\n2. Full elbow extension.\n3. Forearm pronation.\n4. Wrist flexion.",
      "interpretation": "✅ Pain at the lateral epicondyle → epicondylar muscle involvement (lateral epicondylitis)."
    },
    "image": "images/Test de Mills.webp"
  },
  {
    "id": 58,
    "num": "40",
    "es": {
      "region": "🤚 MUÑECA-MANO",
      "name": "Test de presión manual (dinamometría)",
      "category": "Musculatura flexora de la mano",
      "posPatient": "Sentado, codo en 90°, antebrazo y muñeca en posición neutra.",
      "posTherapist": "Entrega el DINAMÓMETRO al paciente y registra el valor.",
      "execution": "1. Paciente agarra el dinamómetro con fuerza máxima.\n2. Varias mediciones (generalmente 3) con descanso.\n3. Comparar lado dominante con no dominante.",
      "interpretation": "✅ Fuerza reducida o dolor → debilidad de la musculatura flexora de la mano."
    },
    "fr": {
      "region": "🤚 POIGNET-MAIN",
      "name": "Test de force de préhension (dynamométrie)",
      "category": "Musculature fléchissante de la main",
      "posPatient": "Assis, coude à 90°, avant-bras et poignet en position neutre.",
      "posTherapist": "Remet le DYNAMOMÈTRE au patient et enregistre la valeur.",
      "execution": "1. Le patient serre le dynamomètre avec une force maximale.\n2. Plusieurs mesures (généralement 3) avec repos entre chaque.\n3. Comparer le côté dominant au non dominant.",
      "interpretation": "✅ Force réduite ou douleur → faiblesse de la musculature fléchissante de la main."
    },
    "en": {
      "region": "🤚 WRIST-HAND",
      "name": "Grip strength test (dynamometry)",
      "category": "Hand flexor muscles",
      "posPatient": "Seated, elbow at 90°, forearm and wrist in neutral position.",
      "posTherapist": "Hands the DYNAMOMETER to the patient and records the value.",
      "execution": "1. Patient squeezes the dynamometer with maximum force.\n2. Several measurements (usually 3) with rest in between.\n3. Compare dominant vs. non-dominant side.",
      "interpretation": "✅ Reduced strength or pain → weakness of the hand flexor muscles."
    },
    "image": "images/Test de presión manual.webp"
  },
  {
    "id": 59,
    "num": "41",
    "es": {
      "region": "🤚 MUÑECA-MANO",
      "name": "Signo de Tinel (muñeca – túnel carpiano)",
      "category": "Síndrome del túnel carpiano",
      "posPatient": "Muñeca en posición neutra, palma hacia arriba.",
      "posTherapist": "Frente a la muñeca del paciente.",
      "execution": "Percutir con el dedo sobre el LIGAMENTO TRANSVERSO DEL CARPO en la cara palmar de la muñeca.",
      "interpretation": "✅ Parestesias irradiadas a dedos 1.º-3.º y mitad del 4.º → atrapamiento del nervio mediano en el túnel carpiano."
    },
    "fr": {
      "region": "🤚 POIGNET-MAIN",
      "name": "Signe de Tinel (poignet – tunnel carpien)",
      "category": "Syndrome du tunnel carpien",
      "posPatient": "Poignet en position neutre, paume vers le haut.",
      "posTherapist": "En face du poignet du patient.",
      "execution": "Percuter avec le doigt sur le LIGAMENT ANNULAIRE DU CARPE sur la face palmaire du poignet.",
      "interpretation": "✅ Paresthésies irradiant aux doigts 1 à 3 et à la moitié du 4e → compression du nerf médian dans le tunnel carpien."
    },
    "en": {
      "region": "🤚 WRIST-HAND",
      "name": "Tinel's sign (wrist – carpal tunnel)",
      "category": "Carpal tunnel syndrome",
      "posPatient": "Wrist in neutral position, palm facing up.",
      "posTherapist": "Facing the patient's wrist.",
      "execution": "Tap with a finger over the TRANSVERSE CARPAL LIGAMENT on the palmar aspect of the wrist.",
      "interpretation": "✅ Paresthesias radiating to fingers 1–3 and the medial half of the 4th → median nerve entrapment in the carpal tunnel."
    },
    "image": "images/Test de Tinel.webp"
  },
  {
    "id": 60,
    "num": "42",
    "es": {
      "region": "🤚 MUÑECA-MANO",
      "name": "Signo de Phalen",
      "category": "Síndrome del túnel carpiano",
      "posPatient": "De pie o sentado.",
      "posTherapist": "Observación.",
      "execution": "El paciente mantiene ambas muñecas en FLEXIÓN MÁXIMA durante 60 segundos (dorso de las manos en contacto, codos en flexión, antebrazo vertical).",
      "interpretation": "✅ Parestesias en territorio del nervio mediano (dedos 1.º-3.º y mitad del 4.º) durante la maniobra → síndrome del túnel carpiano."
    },
    "fr": {
      "region": "🤚 POIGNET-MAIN",
      "name": "Signe de Phalen",
      "category": "Syndrome du tunnel carpien",
      "posPatient": "Debout ou assis.",
      "posTherapist": "Observation.",
      "execution": "Le patient maintient les deux poignets en FLEXION MAXIMALE pendant 60 secondes (dos des mains en contact, coudes en flexion, avant-bras vertical).",
      "interpretation": "✅ Paresthésies dans le territoire du nerf médian (doigts 1 à 3 et moitié du 4e) pendant la manœuvre → syndrome du tunnel carpien."
    },
    "en": {
      "region": "🤚 WRIST-HAND",
      "name": "Phalen's sign",
      "category": "Carpal tunnel syndrome",
      "posPatient": "Standing or seated.",
      "posTherapist": "Observation.",
      "execution": "Patient holds both wrists in MAXIMUM FLEXION for 60 seconds (backs of hands touching, elbows flexed, forearms vertical).",
      "interpretation": "✅ Paresthesias in the median nerve territory (fingers 1–3 and medial half of the 4th) during the maneuver → carpal tunnel syndrome."
    },
    "image": "images/Signo de Phalen.webp"
  }
]
;