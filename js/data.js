const VOCAB = [
  { nl: "de functie", en: "the position / job title", level: "A2", module: "introductions" },
  { nl: "de afdeling", en: "the department", level: "A2", module: "introductions" },
  { nl: "de werkervaring", en: "the work experience", level: "A2", module: "introductions" },
  { nl: "de vaardigheden", en: "the skills", level: "B1", module: "introductions" },
  { nl: "de collega", en: "the colleague", level: "A1", module: "introductions" },
  { nl: "de opdrachtgever", en: "the client / commissioner", level: "B2", module: "introductions" },
  { nl: "het bedrijf", en: "the company", level: "A1", module: "introductions" },
  { nl: "de vestiging", en: "the branch / office location", level: "B1", module: "introductions" },
  { nl: "de vergadering", en: "the meeting", level: "A2", module: "meeting" },
  { nl: "de notulen", en: "the minutes", level: "B2", module: "meeting" },
  { nl: "de agenda", en: "the agenda", level: "A2", module: "meeting" },
  { nl: "de stand van zaken", en: "the state of affairs / status", level: "B2", module: "meeting" },
  { nl: "de vertraging", en: "the delay", level: "B1", module: "meeting" },
  { nl: "het voorstel", en: "the proposal", level: "B1", module: "meeting" },
  { nl: "de deadline", en: "the deadline", level: "A2", module: "meeting" },
  { nl: "vastleggen", en: "to record / put in writing", level: "B2", module: "meeting" },
  { nl: "toelichten", en: "to explain / elaborate", level: "B2", module: "meeting" },
  { nl: "vergaderen", en: "to hold a meeting", level: "B1", module: "meeting" },
  { nl: "de afspraak", en: "the appointment / agreement", level: "A2", module: "email" },
  { nl: "de bijlage", en: "the attachment", level: "B1", module: "email" },
  { nl: "bevestigen", en: "to confirm", level: "B1", module: "email" },
  { nl: "annuleren", en: "to cancel", level: "A2", module: "email" },
  { nl: "uitstellen", en: "to postpone", level: "B2", module: "email" },
  { nl: "opvolgen", en: "to follow up", level: "B2", module: "email" },
  { nl: "met vriendelijke groet", en: "kind regards", level: "A2", module: "email" },
  { nl: "in bijlage vindt u", en: "attached you will find", level: "B2", module: "email" },
  { nl: "zo spoedig mogelijk", en: "as soon as possible", level: "B2", module: "email" },
  { nl: "ter uw informatie", en: "for your information", level: "C1", module: "email" },
  { nl: "namens", en: "on behalf of", level: "B1", module: "email" },
  { nl: "de afspraak bevestigen", en: "to confirm the appointment", level: "B1", module: "email" },
  { nl: "bellen", en: "to call / phone", level: "A1", module: "phone" },
  { nl: "doorverbinden", en: "to transfer (a call)", level: "B1", module: "phone" },
  { nl: "uitkomen", en: "to suit / be convenient", level: "B1", module: "phone" },
  { nl: "de afspraak verzetten", en: "to move/reschedule the appointment", level: "B2", module: "phone" },
  { nl: "beschikbaar", en: "available", level: "A2", module: "phone" },
  { nl: "de ontvangstbevestiging", en: "acknowledgement of receipt", level: "C1", module: "phone" },
  { nl: "de overeenkomst", en: "the contract / agreement", level: "B2", module: "negotiation" },
  { nl: "de voorwaarden", en: "the terms / conditions", level: "B2", module: "negotiation" },
  { nl: "de korting", en: "the discount", level: "B1", module: "negotiation" },
  { nl: "de offerte", en: "the quotation", level: "B2", module: "negotiation" },
  { nl: "de factuur", en: "the invoice", level: "B1", module: "negotiation" },
  { nl: "het budget", en: "the budget", level: "A2", module: "negotiation" },
  { nl: "onderhandelen", en: "to negotiate", level: "B2", module: "negotiation" },
  { nl: "akkoord gaan met", en: "to agree to", level: "B1", module: "negotiation" },
  { nl: "concessie doen", en: "to make a concession", level: "C1", module: "negotiation" },
  { nl: "de opdracht", en: "the assignment / order", level: "B2", module: "negotiation" },
  { nl: "de omzet", en: "the revenue / turnover", level: "B2", module: "presentation" },
  { nl: "de winst", en: "the profit", level: "B1", module: "presentation" },
  { nl: "de marge", en: "the margin", level: "C1", module: "presentation" },
  { nl: "de groei", en: "the growth", level: "B1", module: "presentation" },
  { nl: "de grafiek", en: "the chart / graph", level: "B1", module: "presentation" },
  { nl: "presenteren", en: "to present", level: "B1", module: "presentation" },
  { nl: "toelichten", en: "to explain / go into", level: "B2", module: "presentation" },
  { nl: "concluderen", en: "to conclude", level: "B2", module: "presentation" },
  { nl: "de conclusie", en: "the conclusion", level: "B1", module: "presentation" },
  { nl: "de aanwezigheid", en: "the attendance / presence", level: "B2", module: "presentation" },
  { nl: "onder de aandacht brengen", en: "to bring to attention", level: "C1", module: "presentation" },
  { nl: "de koffiepauze", en: "the coffee break", level: "A1", module: "smalltalk" },
  { nl: "gezellig", en: "nice, sociable, convivial", level: "A2", module: "smalltalk" },
  { nl: "bijpraten", en: "to catch up", level: "B1", module: "smalltalk" },
  { nl: "de lunchpauze", en: "the lunch break", level: "A1", module: "smalltalk" },
  { nl: "het teamuitje", en: "the team outing", level: "B2", module: "smalltalk" },
  { nl: "de planning", en: "the schedule / planning", level: "A2", module: "planning" },
  { nl: "doornemen", en: "to go through / review", level: "B1", module: "planning" },
  { nl: "overnemen", en: "to take over", level: "B1", module: "planning" },
  { nl: "de weekplanning", en: "the weekly schedule", level: "B1", module: "planning" },
  { nl: "afronden", en: "to finish / complete", level: "B1", module: "planning" },
  { nl: "de sollicitatie", en: "the job application", level: "B2", module: "interview" },
  { nl: "de sollicitant", en: "the applicant / candidate", level: "B2", module: "interview" },
  { nl: "het sterke punt", en: "the strong point", level: "B2", module: "interview" },
  { nl: "het zwakke punt", en: "the weak point", level: "B2", module: "interview" },
  { nl: "de groeimogelijkheden", en: "the growth opportunities", level: "B2", module: "interview" },
  { nl: "ervaring opdoen", en: "to gain experience", level: "B1", module: "interview" },
  { nl: "het functioneringsgesprek", en: "the performance review", level: "B2", module: "feedback" },
  { nl: "tevreden zijn over", en: "to be satisfied with", level: "B1", module: "feedback" },
  { nl: "tegen iets aanlopen", en: "to run into something", level: "B2", module: "feedback" },
  { nl: "tussentijds", en: "interim / mid-term", level: "B2", module: "feedback" },
  { nl: "het doel", en: "the goal", level: "A2", module: "feedback" },
  { nl: "de verantwoordelijkheid", en: "the responsibility", level: "B1", module: "feedback" },
  { nl: "de klacht", en: "the complaint", level: "B1", module: "complaint" },
  { nl: "een klacht indienen", en: "to file a complaint", level: "B2", module: "complaint" },
  { nl: "de levering", en: "the delivery", level: "B1", module: "complaint" },
  { nl: "beschadigd", en: "damaged", level: "B1", module: "complaint" },
  { nl: "de compensatie", en: "the compensation", level: "B2", module: "complaint" },
  { nl: "de creditnota", en: "the credit note", level: "C1", module: "complaint" },
  { nl: "inwerken", en: "to train / orient a new employee", level: "B2", module: "onboarding" },
  { nl: "uitleggen", en: "to explain", level: "A2", module: "onboarding" },
  { nl: "de introductie", en: "the introduction", level: "A2", module: "onboarding" },
  { nl: "terechtkomen bij", en: "to end up with / turn to (someone)", level: "B1", module: "onboarding" }
];

const SCENARIOS = [
  {
    id: "introductions",
    title: "Jezelf voorstellen",
    titleEn: "Introducing yourself",
    level: "B1",
    icon: "🤝",
    blurb: "Introduce yourself professionally: name, role, experience and skills.",
    tips: [
      "Use 'u' (formal 'you') in first business contact. Switch to 'je' only when invited.",
      "Jobs: softwareontwikkelaar (developer), marketeer, financieel analist, accountmanager, projectleider.",
      "'Ik werk al drie jaar...' — 'al' signals duration so far."
    ],
    steps: [
      {
        bot: "Goedemorgen! Ik ben Sanne de Vries, accountmanager bij Van Dijk & Partner. En u?",
        en: "Good morning! I'm Sanne de Vries, account manager at Van Dijk & Partner. And you?",
        hint: "Greet them and give your name: 'Goedemorgen, ik ben ...' or 'Goedemorgen, mijn naam is ...'",
        nudge: "Dutch word order: 'Ik ben' + name. Don't forget the greeting.",
        accept: [
          "Goedemorgen, ik ben {naam}",
          "Goedemorgen, mijn naam is {naam}",
          "Goedemorgen! Ik ben {naam}",
          "Hallo, ik ben {naam}",
          "Goedemiddag, ik ben {naam}"
        ]
      },
      {
        bot: "Aangenaam. En wat is uw functie, als ik mag vragen?",
        en: "Nice to meet you. And what is your position, if I may ask?",
        hint: "Say your job title: 'Ik ben ...' (I am ...) or 'Ik werk als ...' (I work as ...).",
        nudge: "Structure: 'Ik ben' + job title + optional 'bij' + company.",
        accept: [
          "Ik ben {functie} bij {bedrijf}",
          "Ik werk als {functie} bij {bedrijf}",
          "Ik ben {functie}",
          "Ik werk als {functie}",
          "Ik ben {functie} bij {bedrijf} in {plaats}"
        ]
      },
      {
        bot: "Interessant. Hoe lang werkt u al in deze functie?",
        en: "Interesting. How long have you been in this position?",
        hint: "Use 'al' + duration: 'Ik werk hier al drie jaar.' (twee weken, zes maanden, tien jaar...)",
        nudge: "Pattern: 'Ik werk' + place/context + 'al' + time period.",
        accept: [
          "Ik werk al {tijd} in deze functie",
          "Ik werk hier al {tijd}",
          "Ik werk al {tijd} bij {bedrijf}",
          "Ik doe dit werk al {tijd}",
          "Ik ben al {tijd} {functie}"
        ]
      },
      {
        bot: "En wat zijn uw belangrijkste vaardigheden?",
        en: "And what are your most important skills?",
        hint: "Try: 'Mijn belangrijkste vaardigheden zijn ...' or 'Ik ben goed in ...' or 'Ik heb ervaring met ...'",
        nudge: "Use the plural: 'Mijn belangrijkste vaardigheden zijn ...' (note: 'zijn', not 'is').",
        accept: [
          "Mijn belangrijkste vaardigheden zijn {vaardigheden}",
          "Ik ben goed in {vaardigheden}",
          "Ik heb ervaring met {vaardigheden}",
          "Mijn sterke punten zijn {vaardigheden}",
          "Ik ben sterk in {vaardigheden}"
        ]
      },
      {
        bot: "Mooi. Waarom bent u geïnteresseerd in samenwerking met ons bedrijf?",
        en: "Great. Why are you interested in working with our company?",
        hint: "Give a reason: 'Omdat ...' (because ...) or 'Ik ben geïnteresseerd in ...' — mention their market, product or reputation.",
        nudge: "'Omdat' sends the verb to the end: 'Omdat jullie sterk zijn in ...'",
        accept: [
          "Ik ben geïnteresseerd in {reden}",
          "Omdat {reden}",
          "Ik zou graag met u samenwerken vanwege {reden}",
          "Ik ben geïnteresseerd in een samenwerking omdat {reden}",
          "Vanwege {reden}"
        ]
      },
      {
        bot: "Uitstekend. Ik stuur u een e-mail om een afspraak in te plannen. Tot snel!",
        en: "Excellent. I'll send you an email to schedule a meeting. See you soon!",
        hint: "Close politely: 'Tot snel!', 'Bedankt, tot dan!' or 'Prima, ik kijk ernaar uit.'",
        nudge: "Any friendly sign-off works: 'Tot snel', 'Bedankt en tot dan', 'Ik kijk ernaar uit'.",
        accept: [
          "Tot snel",
          "Bedankt, tot snel",
          "Prima, tot dan",
          "Goed, tot dan",
          "Bedankt, ik kijk ernaar uit"
        ]
      }
    ]
  },
  {
    id: "meeting",
    title: "De vergadering",
    titleEn: "The meeting",
    level: "B2",
    icon: "📊",
    blurb: "Give a project update, propose solutions and agree on action points.",
    tips: [
      "'De stand van zaken' = current status. 'Toelichten' = to explain in more detail.",
      "Proposals: 'Ik stel voor om ...' sends the verb to the end: 'Ik stel voor om de deadline te verlengen.'",
      "Action points: 'Ik neem ... voor mijn rekening' = I'll take care of ..."
    ],
    steps: [
      {
        bot: "Goedemiddag allemaal. Laten we beginnen. Kun jij kort de stand van zaken van het project toelichten?",
        en: "Good afternoon everyone. Let's start. Could you briefly explain the status of the project?",
        hint: "Start with 'Natuurlijk' or 'Zeker' and describe the status: 'Het project verloopt ...' (goed / volgens plan / moeilijk).",
        nudge: "Structure: 'Het project verloopt' + adverb, or 'De stand van zaken is als volgt: ...'",
        accept: [
          "Natuurlijk, het project verloopt {status}",
          "De stand van zaken is als volgt: {status}",
          "Het project is {status}",
          "Zeker, het project verloopt {status}",
          "Het project verloopt {status}"
        ]
      },
      {
        bot: "Goed om te horen. Lopen we nog vertraging op?",
        en: "Good to hear. Are we still running into any delay?",
        hint: "Answer yes or no: 'Nee, we lopen geen vertraging op.' or 'Ja, we lopen iets vertraging op door ...'",
        nudge: "'Lopen ... op' splits: 'we lopen geen vertraging op'.",
        accept: [
          "Nee, we lopen geen vertraging op",
          "Ja, we lopen iets vertraging op door {oorzaak}",
          "Ja, er is een kleine vertraging van {tijd}",
          "Nee, we liggen precies op schema",
          "Ja, we lopen {tijd} vertraging op"
        ]
      },
      {
        bot: "En wat is jullie voorstel om dat op te lossen?",
        en: "And what is your proposal to solve that?",
        hint: "'Ik stel voor om ...' (I propose to ...) or 'Mijn voorstel is om ...' or 'We kunnen ...'",
        nudge: "After 'om', the verb goes to the end: 'Ik stel voor om extra mensen in te zetten.'",
        accept: [
          "Mijn voorstel is om {voorstel}",
          "We kunnen {voorstel}",
          "Ik stel voor om {voorstel}",
          "We zouden {voorstel} kunnen",
          "Het beste is om {voorstel}"
        ]
      },
      {
        bot: "Kun je dat toelichten? Waarom denk je dat dat gaat werken?",
        en: "Can you elaborate? Why do you think that will work?",
        hint: "Give a reason with 'Omdat ...' — remember the verb goes to the end after 'omdat'.",
        nudge: "Example: 'Omdat we dan meer capacity hebben en de deadline haalbaar is.'",
        accept: [
          "Omdat {reden}",
          "Dat denk ik omdat {reden}",
          "De reden is dat {reden}",
          "Omdat wij {reden}",
          "Dat werkt omdat {reden}"
        ]
      },
      {
        bot: "Prima. Leggen we dat vast in de notulen? Wie doet wat tegen wanneer?",
        en: "Good. Shall we record that in the minutes? Who does what by when?",
        hint: "Claim a task with a deadline: 'Ik neem ... voor mijn rekening en lever op voor ...' or 'Ik zorg dat ... klaar is voor ...'",
        nudge: "Deadline formula: 'vóór vrijdag', 'voor het einde van de week', 'vóór 1 juni'.",
        accept: [
          "Ik neem {taak} voor mijn rekening en lever het op voor {deadline}",
          "Ik zorg dat {taak} klaar is voor {deadline}",
          "Ik doe {taak} en dat is klaar voor {deadline}",
          "Ik pak {taak} op, klaar vóór {deadline}",
          "Ik neem {taak} op me voor {deadline}"
        ]
      },
      {
        bot: "Afgesproken. Dan sluiten we de vergadering af. Bedankt allemaal!",
        en: "Agreed. Then we'll close the meeting. Thanks everyone!",
        hint: "You can close too: 'Bedankt allemaal!' or summarize: 'Dus: ik lever het rapport vóór vrijdag.'",
        nudge: "Repeat your action point to close: 'Dus ik lever ... voor ...' or just thank everyone.",
        accept: [
          "Bedankt allemaal",
          "Bedankt, tot de volgende vergadering",
          "Dus ik lever {taak} voor {deadline}",
          "Prima, bedankt allemaal",
          "Tot vrijdag"
        ]
      }
    ]
  },
  {
    id: "email",
    title: "De zakelijke e-mail",
    titleEn: "The business email",
    level: "B2",
    icon: "✉️",
    blurb: "Write a formal email: confirm an appointment, ask politely, sign off correctly.",
    tips: [
      "Formal opening: 'Geachte heer/mevrouw Jansen,' — informal: 'Beste Pieter,'",
      "Polite request: 'Zou u ... kunnen ...?' or 'Kunt u alstublieft ...?'",
      "Sign-off: 'Met vriendelijke groet,' (standard) or 'Hoogachtend,' (very formal)."
    ],
    steps: [
      {
        bot: "Oefening: bevestig een afspraak met mevrouw Jansen op dinsdag 14 mei om 10:00. Hoe begin je de e-mail? (formeel)",
        en: "Exercise: confirm an appointment with Mrs Jansen on Tuesday 14 May at 10:00. How do you open the email? (formal)",
        hint: "Formal salutation: 'Geachte mevrouw Jansen,' (Dear Mrs Jansen,)",
        nudge: "'Geachte' + title + surname + comma. 'Beste' is too informal here.",
        accept: [
          "Geachte mevrouw Jansen,",
          "Geachte mevrouw {naam},",
          "Geachte mevrouw Jansen",
          "Geachte heer of mevrouw Jansen,"
        ]
      },
      {
        bot: "Goed. Nu de eerste zin: bevestig de afspraak.",
        en: "Good. Now the first sentence: confirm the appointment.",
        hint: "'Hierbij bevestig ik onze afspraak op dinsdag 14 mei om 10:00.'",
        nudge: "Pattern: 'Hierbij bevestig ik' + what + 'op' + day + date + 'om' + time.",
        accept: [
          "Hierbij bevestig ik onze afspraak op dinsdag 14 mei om 10:00",
          "Ik bevestig hierbij onze afspraak van dinsdag 14 mei om 10:00",
          "Hierbij bevestig ik graag onze afspraak op dinsdag 14 mei om 10:00",
          "Ik bevestig onze afspraak op dinsdag 14 mei om 10:00",
          "Hierbij bevestig ik onze afspraak op dinsdag veertien mei om tien uur"
        ]
      },
      {
        bot: "Nu vraag je beleefd of zij de agenda kan bevestigen.",
        en: "Now politely ask whether she can confirm the agenda.",
        hint: "'Zou u de agenda kunnen bevestigen?' or 'Kunt u de agenda bevestigen?'",
        nudge: "Most polite: 'Zou u ... kunnen ...?' — conditional + infinitive at the end.",
        accept: [
          "Zou u de agenda kunnen bevestigen?",
          "Kunt u de agenda bevestigen?",
          "Zou u zo vriendelijk willen zijn de agenda te bevestigen?",
          "Zou u de agenda kunnen bevestigen",
          "Kunt u alstublieft de agenda bevestigen?"
        ]
      },
      {
        bot: "Vraag tot slot of zij contact opneemt bij vragen.",
        en: "Finally, ask whether she will get in touch with any questions.",
        hint: "'Bij vragen kunt u altijd contact met ons opnemen.' or 'Mocht u vragen hebben, neem dan contact op.'",
        nudge: "'Mocht u vragen hebben' = should you have questions — formal and idiomatic.",
        accept: [
          "Neem contact met ons op als u vragen heeft",
          "Bij vragen kunt u altijd contact met ons opnemen",
          "Mocht u vragen hebben, neem dan contact met ons op",
          "Als u vragen heeft, kunt u altijd contact opnemen",
          "Bij vragen kunt u contact met ons opnemen"
        ]
      },
      {
        bot: "En hoe sluit je de e-mail af?",
        en: "And how do you close the email?",
        hint: "'Met vriendelijke groet,' (kind regards,) — the standard formal sign-off.",
        nudge: "Don't forget the comma: 'Met vriendelijke groet,'",
        accept: [
          "Met vriendelijke groet,",
          "Met vriendelijke groet",
          "Hoogachtend,",
          "Met vriendelijke groeten,",
          "Met vriendelijke groet, {naam}"
        ]
      },
      {
        bot: "Perfect. Dit is de basis van elke zakelijke e-mail: aanhef, doel in de eerste zin, beleefd verzoek, afsluiting.",
        en: "Perfect. This is the basis of every business email: salutation, purpose in the first sentence, polite request, sign-off.",
        hint: "Press 'Volgende scenario' to continue.",
        nudge: "Anything like 'Bedankt' or 'Volgende' closes the exercise.",
        accept: ["Volgende", "Oké", "Bedankt", "Klaar", "Volgende scenario"]
      }
    ]
  },
  {
    id: "phone",
    title: "Het telefoongesprek",
    titleEn: "The phone call",
    level: "B1",
    icon: "📞",
    blurb: "Make a business call: state your purpose, negotiate a time, confirm.",
    tips: [
      "Answer professionally: 'Goedemorgen, u spreekt met ...' (you're speaking with ...)",
      "Purpose: 'Ik bel omdat ...' or 'Ik wil graag ...' (I would like to ...)",
      "Convenience: 'Zou dinsdag om 14:00 uitkomen?' — 'uitkomen' = to suit."
    ],
    steps: [
      {
        bot: "Logistiek B.V., u spreekt met Jeroen Bakker. Waarmee kan ik u helpen?",
        en: "Logistiek B.V., you're speaking with Jeroen Bakker. How can I help you?",
        hint: "State who you are and why you call: 'Goedemorgen, mijn naam is ... Ik bel omdat ...'",
        nudge: "'Ik bel omdat ...' sends the verb to the end: 'Ik bel omdat ik een afspraak wil maken.'",
        accept: [
          "Goedemorgen, ik bel omdat {reden}",
          "Goedemorgen, mijn naam is {naam}. Ik bel omdat {reden}",
          "Goedemorgen, ik wil graag {reden}",
          "Hallo, ik bel omdat {reden}",
          "Ik wil graag {reden}"
        ]
      },
      {
        bot: "Begrepen. Wanneer komt het u het beste uit?",
        en: "Understood. When suits you best?",
        hint: "Propose a time: 'Zou dinsdag om 14:00 uitkomen?' or 'Dinsdag om 14:00 zou mij goed uitkomen.'",
        nudge: "'Uitkomen' = suit. 'Zou ... uitkomen?' makes it a polite question.",
        accept: [
          "Zou dinsdag om 14:00 uitkomen?",
          "Dinsdag om 14:00 zou mij goed uitkomen",
          "Kunnen we dinsdag om 14:00?",
          "Past dinsdag om 14:00 u?",
          "Zou {tijd} uitkomen?"
        ]
      },
      {
        bot: "Dinsdag om 14:00 zit helaas vol. Kunt u later die dag, bijvoorbeeld om 16:00?",
        en: "Tuesday at 14:00 is unfortunately fully booked. Can you make it later that day, for example at 16:00?",
        hint: "Accept: 'Ja, 16:00 komt goed uit.' (Yes, 16:00 works for me.)",
        nudge: "'Dat komt goed uit' = that works well for me.",
        accept: [
          "Ja, 16:00 komt goed uit",
          "Ja, dat komt goed uit",
          "Zeker, om 16:00 kan ik",
          "Ja, om 16:00 komt mij goed uit",
          "Prima, 16:00 is goed"
        ]
      },
      {
        bot: "Top. Nog iets anders?",
        en: "Great. Anything else?",
        hint: "Close or ask one more thing: 'Nee, dat was alles. Bedankt!' or 'Ja, nog één vraag: ...'",
        nudge: "'Dat was alles' = that was everything / that's all.",
        accept: [
          "Nee, dat was alles. Bedankt!",
          "Nee verder, bedankt",
          "Ja, nog één vraag: {vraag}",
          "Nee, dat was alles",
          "Nee, dit is alles. Bedankt"
        ]
      },
      {
        bot: "Goed, dan bevestig ik de afspraak per e-mail. Fijne dag nog!",
        en: "OK, I'll confirm the appointment by email. Have a nice day!",
        hint: "Polite close: 'Fijne dag nog!' or 'Bedankt, u ook!'",
        nudge: "Mirror their closing: 'Fijne dag nog' or 'Bedankt, u ook'.",
        accept: [
          "Fijne dag nog!",
          "Bedankt, u ook!",
          "Fijne dag nog",
          "Bedankt, fijne dag",
          "U ook, bedankt"
        ]
      }
    ]
  },
  {
    id: "smalltalk",
    title: "De koffiepauze",
    titleEn: "Small talk at the office",
    level: "A2",
    icon: "☕",
    blurb: "Chat with colleagues about the weekend, your job and after-work plans.",
    tips: [
      "With colleagues 'je' is normal — reserve 'u' for clients and senior management.",
      "Return every question: 'Goed, en met jou?' (Fine, and you?)",
      "'Gezellig' is the most Dutch word there is: nice, sociable, pleasant."
    ],
    steps: [
      {
        bot: "Hoi! Even bijkomen van die vergadering, hè? Hoe was je weekend?",
        en: "Hi! Recovering from that meeting, right? How was your weekend?",
        hint: "Short answer + return the question: 'Goed, bedankt. En met jou?'",
        nudge: "'En met jou?' = and you? Keep it light and short.",
        accept: [
          "Goed, bedankt. En met jou?",
          "Het was goed, bedankt. En met jou?",
          "Prima, en met jou?",
          "Leuk, ik heb {activiteit} gedaan. En met jou?",
          "Rustig, en met jou?"
        ]
      },
      {
        bot: "Mijn weekend was rustig, ik heb gefietst en gelezen. Werk je al lang hier?",
        en: "My weekend was quiet, I cycled and read. Have you worked here long?",
        hint: "Use 'pas' (only/just) for short, 'al' (already) for long: 'Ik werk hier pas twee maanden.'",
        nudge: "'Ik werk hier pas' + short time, or 'Ik werk hier al' + time.",
        accept: [
          "Nee, ik werk hier pas {tijd}",
          "Ja, ik werk hier al {tijd}",
          "Ik werk hier al {tijd}",
          "Ik ben hier pas {tijd}",
          "Nog niet zo lang, pas {tijd}"
        ]
      },
      {
        bot: "Ah, leuk. En hoe vind je het hier tot nu toe?",
        en: "Ah, nice. And how do you like it here so far?",
        hint: "'Ik vind het leuk hier.' or 'Het bevalt me goed.' (I like it here.)",
        nudge: "'Het bevalt me goed' = it suits me well — very idiomatic.",
        accept: [
          "Ik vind het leuk hier",
          "Het bevalt me goed",
          "Prima, iedereen is behulpzaam",
          "De collega's zijn aardig en het werk is {mening}",
          "Ik voel me hier snel thuis"
        ]
      },
      {
        bot: "Mooi om te horen! Zullen we na het werk nog iets gaan drinken met het team?",
        en: "Good to hear! Shall we go for a drink after work with the team?",
        hint: "Accept ('Ja, leuk!') or politely decline ('Helaas, ik kan vandaag niet.').",
        nudge: "'Gezellig' is the perfect Dutch word here: 'Ja, gezellig!'",
        accept: [
          "Ja, leuk!",
          "Ja, gezellig",
          "Ja, ik kom graag",
          "Helaas, ik kan vandaag niet",
          "Graag! Hoe laat?"
        ]
      },
      {
        bot: "Top! We komen om 17:30 samen bij de ingang. Tot straks!",
        en: "Great! We'll meet at the entrance at 17:30. See you in a bit!",
        hint: "'Tot straks!' (See you in a bit!)",
        nudge: "Confirm simply: 'Tot straks!' or 'OKé, ik ben er.'",
        accept: [
          "Tot straks",
          "Ja, tot straks",
          "OKé, ik ben er",
          "Tot straks bij de ingang"
        ]
      }
    ]
  },
  {
    id: "planning",
    title: "De week plannen",
    titleEn: "Planning the week",
    level: "A2",
    icon: "🗓️",
    blurb: "Agree on tasks, swap duties and check availability with a colleague.",
    tips: [
      "'Dat lukt' = that works. 'Dat lukt niet' = that doesn't work.",
      "Separable verbs split: 'Ik neem het gesprek over.' (overnemen = to take over)",
      "Sequence your week with 'eerst', 'daarna', 'vervolgens', 'tenslotte'."
    ],
    steps: [
      {
        bot: "Hoi, heb je even? Ik wil de planning voor volgende week even doornemen.",
        en: "Hi, do you have a moment? I'd like to go through the planning for next week.",
        hint: "Agree simply: 'Ja, natuurlijk.' or 'Zeker, ik heb even tijd.'",
        nudge: "Short and friendly: 'Ja, natuurlijk' or 'Zeker, ga je gang'.",
        accept: [
          "Ja, natuurlijk",
          "Zeker, ik heb even tijd",
          "Ja, ik heb even tijd",
          "Zeker, ga je gang",
          "Ja, kom maar"
        ]
      },
      {
        bot: "Kun jij maandag de presentatie afronden?",
        en: "Could you finish the presentation on Monday?",
        hint: "'Ja, dat lukt.' or 'Ja, ik rond de presentatie maandag af.' (afronden = to finish)",
        nudge: "'Ik rond ... af' — separable verb: 'Ja, ik rond de presentatie maandag af.'",
        accept: [
          "Ja, dat lukt",
          "Ja, maandag lukt",
          "Ja, ik rond de presentatie maandag af",
          "Ja, de presentatie is maandag klaar",
          "Ja, dat lukt zeker"
        ]
      },
      {
        bot: "Fijn. Dinsdag heb ik de hele dag training. Kun jij mijn telefoongesprek met de klant overnemen?",
        en: "Great. On Tuesday I'm in training all day. Could you take over my phone call with the client?",
        hint: "'Ja, ik neem het gesprek over.' — 'overnemen' is separable.",
        nudge: "'Ik neem ... over': 'Ja, ik neem het gesprek over.'",
        accept: [
          "Ja, ik neem het gesprek over",
          "Geen probleem, ik neem het over",
          "Ja, dat kan ik doen",
          "Ja, ik bel de klant",
          "Ja, ik neem het over"
        ]
      },
      {
        bot: "Dank je! Woensdag om 10:00 is de teamvergadering. Ben je erbij?",
        en: "Thanks! On Wednesday at 10:00 there's the team meeting. Will you be there?",
        hint: "'Ja, ik ben erbij.' (Yes, I'll be there.) or mention a conflict.",
        nudge: "'Er zijn' = to be present: 'Ja, ik ben erbij.'",
        accept: [
          "Ja, ik ben erbij",
          "Ja, ik ben er",
          "Nee, dan ben ik bij de klant",
          "Helaas, ik heb dan al een afspraak",
          "Ja, ik ben aanwezig"
        ]
      },
      {
        bot: "Goed. Dan zet ik het zo in de agenda. Nog iets voor vrijdag?",
        en: "Good. I'll put it in the calendar then. Anything for Friday?",
        hint: "'Nee, verder niet.' or add one thing: 'Ja, nog één ding: ...'",
        nudge: "'Verder niet' = nothing else. Or: 'Ja, nog één ding: ...'",
        accept: [
          "Nee, verder niet",
          "Nee, dit was alles",
          "Ja, nog één ding: {iets}",
          "Nee, het is compleet",
          "Ja, ik wil graag {iets}"
        ]
      }
    ]
  },
  {
    id: "onboarding",
    title: "De nieuwe collega",
    titleEn: "The new colleague",
    level: "B1",
    icon: "🧑\u200d💼",
    blurb: "Show a new colleague around: your role, routines, systems and who to ask.",
    tips: [
      "'Ja, klopt.' = yes, that's right — great confirmation phrase.",
      "'Je kunt terecht bij ...' = you can go to ... (for help)",
      "Explain routines with time markers: 'Om 9:00 ... Daarna ... Tenslotte ...'"
    ],
    steps: [
      {
        bot: "Hallo, ik ben Daan, ik begin vandaag op de afdeling. Jij zit toch bij klantenservice?",
        en: "Hello, I'm Daan, I'm starting in the department today. You're with customer service, right?",
        hint: "Confirm and add your role: 'Ja, klopt. Ik werk bij klantenservice.'",
        nudge: "'Ja, klopt' = yes, correct. Then add what you do.",
        accept: [
          "Ja, klopt. Ik werk bij klantenservice",
          "Ja, ik zit bij klantenservice",
          "Ja, klopt, ik werk daar als {functie}",
          "Ja, dat klopt",
          "Ja, ik werk daar al {tijd}"
        ]
      },
      {
        bot: "Leuk! Welke systemen heb ik nodig in mijn eerste week?",
        en: "Nice! Which systems do I need in my first week?",
        hint: "'Je hebt toegang nodig tot ...' or 'Vraag een account aan voor ... bij IT.'",
        nudge: "'Vraag ... aan' = request (separable): 'Vraag een account aan bij IT.'",
        accept: [
          "Je hebt een account nodig voor {systeem}",
          "Allereerst heb je toegang nodig tot {systeem}",
          "Vraag een account aan voor {systeem} bij IT",
          "Je moet toegang hebben tot {systeem}",
          "Eerst een account voor {systeem}"
        ]
      },
      {
        bot: "Duidelijk. Hoe verloopt een normale dag hier?",
        en: "Clear. What does a normal day here look like?",
        hint: "Describe the routine with sequence words: 'Om 9:00 starten we met ... Daarna ...'",
        nudge: "Use 'eerst', 'daarna', 'vervolgens', 'tenslotte' to structure the day.",
        accept: [
          "Om 9:00 starten we met een kort overleg",
          "We beginnen om {tijd} met {activiteit}",
          "Eerst check je de mail, daarna {activiteit}",
          "Om {tijd} beginnen we, daarna {activiteit}",
          "Eerst {activiteit}, daarna {activiteit2}"
        ]
      },
      {
        bot: "Handig. En bij wie kan ik terecht als er iets niet werkt?",
        en: "Useful. And who can I turn to if something doesn't work?",
        hint: "'Je kunt terecht bij ...' (you can go to ...): 'Bij IT-problemen kun je terecht bij ...'",
        nudge: "'Voor X kun je terecht bij Y' — for X you go to Y.",
        accept: [
          "Bij IT-problemen kun je terecht bij {persoon}",
          "Voor vragen over {onderwerp} ga je naar {persoon}",
          "Neem contact op met {persoon} als er iets niet lukt",
          "Je kunt terecht bij {persoon}",
          "Voor {onderwerp} kun je terecht bij {persoon}"
        ]
      },
      {
        bot: "Super, dit helpt enorm. Alvast bedankt!",
        en: "Great, this helps a lot. Thanks in advance!",
        hint: "'Graag gedaan!' (You're welcome!) or 'Veel succes op je eerste dag!'",
        nudge: "'Graag gedaan' is the standard reply to thanks.",
        accept: [
          "Graag gedaan",
          "Geen probleem, veel succes",
          "Veel succes op je eerste dag!",
          "Stel gerust meer vragen",
          "Graag gedaan, veel succes"
        ]
      }
    ]
  },
  {
    id: "complaint",
    title: "Een klacht indienen",
    titleEn: "Filing a complaint",
    level: "B1",
    icon: "⚠️",
    blurb: "Complain about a delivery: stay factual, state the remedy, set a deadline.",
    tips: [
      "'Een klacht indienen' = to file a complaint — neutral and businesslike.",
      "Facts first: what you ordered, what arrived, when.",
      "End every complaint with a concrete expectation and deadline."
    ],
    steps: [
      {
        bot: "Leverancier De Groot, goedemiddag. Waarmee kan ik u helpen?",
        en: "Supplier De Groot, good afternoon. How can I help you?",
        hint: "State your purpose immediately: 'Ik bel over order ...' or 'Ik wil een klacht indienen over ...'",
        nudge: "'Een klacht indienen' = to file a complaint. Businesslike and neutral.",
        accept: [
          "Goedemiddag, ik bel over order {nummer}",
          "Goedemiddag, mijn naam is {naam} van {bedrijf}. Ik bel over {onderwerp}",
          "Ik wil graag een klacht indienen over {onderwerp}",
          "Goedemiddag, ik bel over een levering",
          "Ik bel omdat er een probleem is met order {nummer}"
        ]
      },
      {
        bot: "Wat is er precies aan de hand?",
        en: "What exactly is going on?",
        hint: "Facts first: 'We hebben ... besteld, maar ... ontvangen.' or 'De levering is ... te laat.'",
        nudge: "Stay factual, not emotional: 'De levering is vijf dagen te laat en de factuur is al betaald.'",
        accept: [
          "De levering van {datum} is niet aangekomen",
          "We hebben {aantal} besteld, maar we hebben {aantal2} ontvangen",
          "De producten van order {nummer} zijn beschadigd",
          "De levering is {dagen} dagen te laat",
          "De levering is {dagen} te laat"
        ]
      },
      {
        bot: "Dat spijt me. Wat is voor u een passende oplossing?",
        en: "I'm sorry about that. What would be an appropriate solution for you?",
        hint: "State the remedy: 'We verwachten een nieuwe levering binnen ...' or 'We vragen een compensatie van ...'",
        nudge: "Be concrete: 'Uiterlijk vrijdag geleverd, anders annuleren we de order.'",
        accept: [
          "We verwachten een nieuwe levering binnen {tijd}",
          "We vragen een compensatie van {bedrag}",
          "Ik wil een creditnota voor de beschadigde producten",
          "De levering moet uiterlijk {datum} binnen zijn",
          "We verwachten uiterlijk {datum} een oplossing"
        ]
      },
      {
        bot: "Ik ga het intern bespreken en bel u vandaag nog terug. Is dat akkoord?",
        en: "I'll discuss it internally and call you back today. Is that agreed?",
        hint: "'Ja, dat is akkoord, maar ...' — agree, then set your expectation.",
        nudge: "Add a deadline: 'Akkoord, maar ik verwacht uiterlijk vrijdag een oplossing.'",
        accept: [
          "Ja, dat is akkoord",
          "Akkoord, maar ik verwacht uiterlijk {tijd} een reactie",
          "Prima, maar ik verwacht uiterlijk {datum} een oplossing",
          "Ja, bel mij vandaag nog terug",
          "Ja, mits ik vandaag nog een reactie krijg"
        ]
      },
      {
        bot: "Duidelijk. Ik bevestig alle afspraken per e-mail.",
        en: "Clear. I'll confirm all agreements by email.",
        hint: "'Prima, graag schriftelijk.' (Good, in writing please.)",
        nudge: "Confirm and add: 'Graag met een bevestiging van de nieuwe leverdatum.'",
        accept: [
          "Prima, graag schriftelijk",
          "Dank u, dan wacht ik de e-mail af",
          "Goed, graag met de nieuwe leverdatum",
          "Prima, ik kijk uit naar uw e-mail",
          "Zo doen we dat, dank u"
        ]
      }
    ]
  },
  {
    id: "interview",
    title: "De sollicitatie",
    titleEn: "The job interview",
    level: "B2",
    icon: "💼",
    blurb: "Present your experience, strengths and motivation in a job interview.",
    tips: [
      "Answer structure: present role → experience → one achievement.",
      "Soften your weakness with improvement: 'Aan ... werk ik actief.'",
      "Use STAR: Situation, Task, Action, Result — end with 'Het resultaat was ...'"
    ],
    steps: [
      {
        bot: "Goedemorgen, fijn dat u er bent. Vertel eens iets over uzelf.",
        en: "Good morning, nice that you're here. Tell us something about yourself.",
        hint: "Present role + relevant experience: 'Momenteel werk ik als ... Daarvoor was ik ...'",
        nudge: "Keep it relevant: current role, years of experience, one achievement.",
        accept: [
          "Ik ben {naam}, ik werk als {functie} bij {bedrijf}",
          "Ik heb {tijd} ervaring als {functie}",
          "Dank u. Ik heb een achtergrond in {achtergrond}",
          "Momenteel werk ik als {functie}, daarvoor was ik {functie2}",
          "Ik werk nu als {functie} en heb {tijd} ervaring"
        ]
      },
      {
        bot: "Interessant. Waarom wilt u bij ons werken?",
        en: "Interesting. Why do you want to work with us?",
        hint: "'Omdat ...' — verb to the end: 'Omdat ik graag wil bijdragen aan ...'",
        nudge: "Be concrete: their market position or product, plus 'dat spreekt mij aan' (that appeals to me).",
        accept: [
          "Omdat {reden}",
          "Ik wil graag werken aan {onderwerp}",
          "Uw bedrijf is marktleider in {markt} en dat spreekt mij aan",
          "Omdat ik mijn ervaring wil inzetten bij {onderwerp}",
          "Ik voel mij aangetrokken tot {onderwerp}"
        ]
      },
      {
        bot: "Wat is uw grootste sterke punt? En uw zwakke punt?",
        en: "What is your greatest strength? And your weakness?",
        hint: "'Mijn sterke punt is ...' — for the weakness, add what you do about it: 'Aan ... werk ik nog.'",
        nudge: "Always soften the weakness with improvement: 'Aan mijn presentatievaardigheden werk ik actief.'",
        accept: [
          "Mijn sterke punt is {sterk}, mijn zwakke punt is {zwak}",
          "Ik ben sterk in {sterk}. Aan {zwak} werk ik nog",
          "Mijn kracht is {sterk}. Mijn zwakke punt is dat {zwak}",
          "Mijn sterke punt is {sterk}. Aan {zwak} werk ik actief",
          "Ik ben analytisch sterk, maar moet leren delegeren"
        ]
      },
      {
        bot: "Kunt u een voorbeeld geven van een moeilijke situatie die u heeft opgelost?",
        en: "Could you give an example of a difficult situation you solved?",
        hint: "STAR method: 'Laatst kregen we te maken met ... Ik heb toen ... Het resultaat was ...'",
        nudge: "End with the result: 'Daardoor ...' or 'Het resultaat was dat ...'",
        accept: [
          "Ja, bij {bedrijf} {voorbeeld}",
          "Een keer moest ik {situatie}. Ik heb toen {oplossing}",
          "Laatst kregen we te maken met {situatie}. Ik heb {oplossing}",
          "Laatst {situatie}. Ik heb toen {oplossing}, het resultaat was {resultaat}",
          "Bij mijn vorige werkgever {voorbeeld}"
        ]
      },
      {
        bot: "Heeft u nog vragen voor ons?",
        en: "Do you have any questions for us?",
        hint: "Always ask something: 'Hoe ziet een typische werkdag eruit?' or 'Wat zijn de groeimogelijkheden?'",
        nudge: "A strong question: 'Wat verwacht u van de nieuwe collega in de eerste zes maanden?'",
        accept: [
          "Ja, hoe ziet een typische werkdag eruit?",
          "Ja, wat zijn de groeimogelijkheden binnen het team?",
          "Ja, hoe is de samenwerking binnen het team?",
          "Ja, wat verwacht u van de nieuwe collega in de eerste zes maanden?",
          "Nee, uw uitleg was heel duidelijk. Bedankt"
        ]
      },
      {
        bot: "Dank u wel. We nemen binnen een week contact met u op over de vervolgstappen.",
        en: "Thank you. We'll contact you within a week about the next steps.",
        hint: "'Bedankt voor het gesprek. Ik kijk uit naar uw bericht.'",
        nudge: "Thank them and look forward: 'Ik kijk uit naar uw bericht.'",
        accept: [
          "Bedankt voor de tijd",
          "Dank u wel, ik hoor het graag",
          "Bedankt, ik kijk uit naar uw bericht",
          "Alvast bedankt voor de mogelijkheid",
          "Bedankt voor het gesprek"
        ]
      }
    ]
  },
  {
    id: "feedback",
    title: "Het functioneringsgesprek",
    titleEn: "The performance review",
    level: "B2",
    icon: "🔄",
    blurb: "Discuss your year with your manager: results, obstacles, needs and goals.",
    tips: [
      "'Ik loop tegen ... aan' = I run into ... (separable: 'lopen ... aan')",
      "Conditional requests: 'Het zou helpen als ...' — verb to the end after 'als'.",
      "Set concrete goals: 'Ik wil binnen een jaar projectleider worden.'"
    ],
    steps: [
      {
        bot: "Welkom. Dit is je jaarlijkse functioneringsgesprek. Hoe kijk je zelf terug op het afgelopen jaar?",
        en: "Welcome. This is your annual performance review. How do you look back on the past year?",
        hint: "'Ik ben tevreden over ...' or mention results: 'Ik heb ... bereikt.'",
        nudge: "Lead with facts: 'Ik heb het team uitgebreid en twee projecten opgeleverd.'",
        accept: [
          "Positief, ik heb {resultaat} bereikt",
          "Ik ben tevreden over {onderwerp}",
          "Het ging goed, vooral {onderwerp}",
          "Ik kijk terug op een goed jaar: {resultaat}",
          "Over het algemeen goed, ik heb {resultaat}"
        ]
      },
      {
        bot: "Ik zie dat ook zo. Waar loop je tegenaan?",
        en: "I see it the same way. What are you running into?",
        hint: "'Ik loop tegen ... aan' (I run into ...) — separable verb.",
        nudge: "'Tegenaan lopen' splits: 'Ik loop tegen te weinig overleg aan.'",
        accept: [
          "Ik loop tegen {probleem} aan",
          "Soms lukt het niet om {probleem}",
          "De werkdruk is hoog als {probleem}",
          "Ik mis {probleem}",
          "Ik loop vooral tegen {probleem} aan"
        ]
      },
      {
        bot: "Begrijpelijk. Wat heb je nodig om dat op te lossen?",
        en: "Understandable. What do you need to solve that?",
        hint: "'Ik heb behoefte aan ...' or conditional: 'Het zou helpen als ...'",
        nudge: "'Het zou helpen als ...' — the verb goes to the end after 'als'.",
        accept: [
          "Ik heb behoefte aan {behoefte}",
          "Het zou helpen als {behoefte}",
          "Ik zou graag {behoefte} willen",
          "Meer {behoefte} zou helpen",
          "Het zou helpen wanneer {behoefte}"
        ]
      },
      {
        bot: "Goed punt. Voor volgend jaar stellen we doelen op. Wat wil jij bereiken?",
        en: "Good point. For next year we'll set goals. What do you want to achieve?",
        hint: "'Ik wil ... bereiken' or 'Mijn doel is om ...'",
        nudge: "Make it concrete: 'Ik wil binnen een jaar projectleider worden.'",
        accept: [
          "Ik wil volgend jaar {doel}",
          "Mijn doel is om {doel}",
          "Ik wil graag doorgroeien richting {doel}",
          "Ik wil meer verantwoordelijkheid voor {doel}",
          "Ik wil binnen een jaar {doel}"
        ]
      },
      {
        bot: "Uitstekend. Ik noteer de doelen en over zes maanden doen we een tussentijdse evaluatie.",
        en: "Excellent. I'll note the goals and in six months we'll do an interim evaluation.",
        hint: "'Prima, afgesproken.' (Fine, agreed.)",
        nudge: "'Afgesproken' = agreed — the natural close of a review.",
        accept: [
          "Prima, afgesproken",
          "Zeker, ik vind dat goed",
          "Goed idee, tussentijds evalueren is waardevol",
          "Akkoord",
          "Prima, ik kijk ernaar uit"
        ]
      }
    ]
  },
  {
    id: "negotiation",
    title: "Onderhandelen",
    titleEn: "Negotiating",
    level: "C1",
    icon: "⚖️",
    blurb: "Negotiate price, terms and contracts with conditional structures.",
    tips: [
      "Concede conditionally: 'Als u een tweejarig contract tekent, kunnen we ...'",
      "'mits' / 'op voorwaarde dat' = provided that — both send the verb to the end.",
      "Soften: 'Dat lijkt mij een redelijk voorstel, mits ...' (that seems reasonable to me, provided ...)"
    ],
    steps: [
      {
        bot: "Wij zijn geïnteresseerd in uw dienstverlening, maar uw prijs van €50.000 ligt boven ons budget. Wat kunt u voor ons doen?",
        en: "We're interested in your services, but your price of €50,000 is above our budget. What can you do for us?",
        hint: "Make a conditional offer: 'Als u een tweejarig contract tekent, kunnen we een korting aanbieden.'",
        nudge: "'Als ... , kunnen we ...' — the condition first, then the concession.",
        accept: [
          "Als u een contract van twee jaar tekent, kunnen we een korting van {x}% aanbieden",
          "Bij een langdurig contract kunnen we {concessie}",
          "Als u een tweejarig contract tekent, bieden we {concessie} aan",
          "Ik kan u een korting van {x}% aanbieden bij een contract van twee jaar",
          "We kunnen een korting geven als {conditie}"
        ]
      },
      {
        bot: "Een korting van 5% is niet voldoende. Ons budget is maximaal €42.000. Hoe ziet u een oplossing?",
        en: "A 5% discount is not enough. Our budget is €42,000 at most. How do you see a solution?",
        hint: "Reduce scope to meet the price: 'We kunnen de prijs naar €42.000 brengen door ...'",
        nudge: "Offer a trade-off: fewer deliverables, longer timeline, or phased delivery.",
        accept: [
          "Dan stellen we voor om {aanpassing} zodat de prijs binnen uw budget valt",
          "We kunnen de prijs naar 42.000 brengen door {aanpassing}",
          "Een mogelijkheid is {aanpassing}, dan komen we aan 42.000",
          "We kunnen het pakket aanpassen: {aanpassing}",
          "Als we {aanpassing} dan komt de prijs op 42.000"
        ]
      },
      {
        bot: "En als wij liever een korter contract hebben? Welke voorwaarden zijn voor u essentieel?",
        en: "And what if we'd prefer a shorter contract? Which terms are essential for you?",
        hint: "State your terms: 'Voor ons is essentieel dat ...' — 'dat' sends the verb to the end.",
        nudge: "Example: 'Voor ons is essentieel dat de betaling binnen 30 dagen plaatsvindt.'",
        accept: [
          "Voor ons is essentieel dat {voorwaarde}",
          "Onze essentiële voorwaarde is dat {voorwaarde}",
          "We moeten ten minste {voorwaarde}",
          "Voor ons moet er ten minste {voorwaarde}",
          "Wij eisen dat {voorwaarde}"
        ]
      },
      {
        bot: "Begrijpelijk. Mijn voorstel: een contract van één jaar met optie tot verlenging, tegen €45.000. Gaat u daarmee akkoord?",
        en: "Understandable. My proposal: a one-year contract with an option to extend, at €45,000. Do you agree?",
        hint: "Agree with a condition: 'Ik ga akkoord, mits ...' or 'Dat lijkt mij een redelijk voorstel, mits ...'",
        nudge: "'Mits' = provided that, verb to the end: 'mits de betaling binnen 30 dagen gebeurt.'",
        accept: [
          "Dat lijkt mij een redelijk voorstel, mits {voorwaarde}",
          "Ik ga akkoord, mits {voorwaarde}",
          "Akkoord, op voorwaarde dat {voorwaarde}",
          "Ik ga daarmee akkoord mits {voorwaarde}",
          "Dat lijkt me een redelijk voorstel, op voorwaarde dat {voorwaarde}"
        ]
      },
      {
        bot: "Perfect. Dan leggen we deze afspraak schriftelijk vast en sturen wij vandaag nog de overeenkomst.",
        en: "Perfect. Then we'll record this agreement in writing and send the contract today.",
        hint: "Confirm the wrap-up: 'Uitstekend, ik kijk uit naar de overeenkomst.'",
        nudge: "Confirm and look forward: 'Uitstekend' + 'ik kijk uit naar de overeenkomst'.",
        accept: [
          "Uitstekend, ik kijk uit naar de overeenkomst",
          "Uitstekend",
          "Prima, ik kijk uit naar de overeenkomst",
          "Goed, dan wacht ik de overeenkomst af",
          "Akkoord, tot snel"
        ]
      }
    ]
  },
  {
    id: "presentation",
    title: "Presenteren",
    titleEn: "Presenting",
    level: "C1",
    icon: "🎯",
    blurb: "Open a presentation, handle interruptions and close convincingly.",
    tips: [
      "Open: 'Goedemorgen allemaal, bedankt voor uw aanwezigheid.' (thank you for your attendance)",
      "Transitions: 'Laten we beginnen met ...' / 'Dat brengt mij bij het volgende punt.'",
      "Handle questions: 'Dat is een goede vraag.' buys time before answering."
    ],
    steps: [
      {
        bot: "U geeft straks een presentatie over de jaarresultaten aan het managementteam. Hoe opent u de presentatie?",
        en: "You're about to give a presentation on the annual results to the management team. How do you open?",
        hint: "Greet, thank, announce: 'Goedemorgen allemaal, bedankt voor uw aanwezigheid. Vandaag bespreek ik de jaarresultaten.'",
        nudge: "Three parts: greeting + thanks + topic. 'Vandaag bespreek ik ...'",
        accept: [
          "Goedemorgen allemaal, bedankt voor uw aanwezigheid. Vandaag bespreek ik de jaarresultaten",
          "Goedemorgen. Mijn naam is {naam} en ik ga u vandaag de jaarresultaten toelichten",
          "Dames en heren, welkom. Ik ga de jaarresultaten van dit jaar presenteren",
          "Goedemorgen iedereen, bedankt dat u er bent. Vandaag presenteer ik de jaarresultaten",
          "Goedemorgen, bedankt voor uw aanwezigheid. Vandaag bespreek ik de jaarresultaten"
        ]
      },
      {
        bot: "Sterke opening. Wat zegt u als overgang naar het eerste onderwerp: de omzet?",
        en: "Strong opening. What do you say as a transition to the first topic: revenue?",
        hint: "'Laten we beginnen met de omzet.' or 'Ik begin met de omzet.' or 'Allereerst de omzet.'",
        nudge: "'Laten we beginnen met' + noun (de omzet).",
        accept: [
          "Laten we beginnen met de omzet",
          "Ik begin met de omzet",
          "Als eerste kijk ik naar de omzet",
          "Allereerst de omzet",
          "Om te beginnen de omzet"
        ]
      },
      {
        bot: "Stel: de omzet is met 12% gestegen. Hoe brengt u dat over?",
        en: "Suppose: revenue rose by 12%. How do you convey that?",
        hint: "'De omzet is met 12% gestegen, vooral dankzij ...' — 'met' = by (amount), 'dankzij' = thanks to.",
        nudge: "Add a cause: 'vooral dankzij nieuwe klanten' or 'met name door de export'.",
        accept: [
          "De omzet is met 12% gestegen, vooral dankzij {oorzaak}",
          "Onze omzet steeg met 12% door {oorzaak}",
          "De omzet groeide dit jaar met 12%, met name door {oorzaak}",
          "De omzet is met 12% gestegen",
          "We zien een omzetgroei van 12% dankzij {oorzaak}"
        ]
      },
      {
        bot: "Een manager onderbreekt u met een kritische vraag over de dalende marges. Hoe reageert u?",
        en: "A manager interrupts you with a critical question about declining margins. How do you respond?",
        hint: "Acknowledge, explain, reassure: 'Dat is een goede vraag. De marges zijn onder druk door ..., maar we verwachten herstel in ...'",
        nudge: "Never dismiss. 'Dat is een goede vraag' + short answer + 'ik kom daar zo dadelijk op terug' if needed.",
        accept: [
          "Dat is een goede vraag. De marges zijn onder druk door {oorzaak}, maar we verwachten herstel in {periode}",
          "Ik kom daar zo dadelijk op terug, maar kort gezegd: {antwoord}",
          "Goede vraag. De marge daalde door {oorzaak}",
          "De marges zijn onder druk door {oorzaak}, maar {antwoord}",
          "Dat is een terechte opmerking. {antwoord}"
        ]
      },
      {
        bot: "Tot slot: hoe sluit u de presentatie af en nodigt u uit tot vragen?",
        en: "Finally: how do you close the presentation and invite questions?",
        hint: "Summarize and invite: 'Ik sluit af met een samenvatting: ... Zijn er nog vragen?'",
        nudge: "End with 'Zijn er nog vragen?' or 'Als er vragen zijn, hoor ik die graag.'",
        accept: [
          "Ik sluit af met een samenvatting: {samenvatting}. Zijn er nog vragen?",
          "Dat was mijn presentatie. Zijn er nog vragen?",
          "Tot slot: zijn er nog vragen?",
          "Dit waren de jaarresultaten. Als er vragen zijn, hoor ik die graag",
          "Samenvattend: {samenvatting}. Zijn er nog vragen?"
        ]
      }
    ]
  }
];

const GRAMMAR_TOPICS = [
  {
    title: "V2 word order (main clauses)",
    level: "A2",
    body: "In a Dutch main clause the conjugated verb is always the second element. 'Vandaag bespreek ik de jaarresultaten.' — 'Vandaag' is first, so the verb comes immediately after, before 'ik'."
  },
  {
    title: "Verb-final after 'omdat', 'om ... te', 'mits'",
    level: "B1",
    body: "Subordinating conjunctions push the verb to the end: 'Ik bel omdat ik een afspraak wil maken.' 'Ik stel voor om de deadline te verlengen.' 'Akkoord, mits de betaling binnen 30 dagen gebeurt.'"
  },
  {
    title: "'u' vs 'je'",
    level: "A2",
    body: "Use 'u' in formal business contact: 'Zou u de agenda kunnen bevestigen?' Switch to 'je' only when the other person proposes it ('Zullen we jou zeggen?')."
  },
  {
    title: "Modal verbs in the past",
    level: "B1",
    body: "'We konden de deadline niet halen.' With a second verb the perfect uses a double infinitive: 'We hebben de deadline niet kunnen halen.' (not 'gekannd')"
  },
  {
    title: "Polite questions with 'zou'",
    level: "B2",
    body: "'Zou u ... kunnen ...?' is the most polite form: 'Zou u het rapport kunnen toesturen?' Softer than 'Kunt u ...?' — standard in business email."
  }
];
