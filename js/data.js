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

GRAMMAR_TOPICS.push(
  {
    title: "de-words vs het-words",
    level: "A2",
    body: "About 75% of Dutch nouns take 'de'; the rest take 'het'. All plurals and all diminutives take 'het'. Learn every business noun with its article: 'de vergadering' but 'het rapport', 'het aanbod', 'het contract'."
  },
  {
    title: "Separable verbs",
    level: "A2",
    body: "Verbs like 'opbellen', 'afronden', 'overnemen' and 'vastleggen' split in main clauses: 'Ik bel je morgen op.' 'Hij maakt de presentatie vandaag af.' In subclauses they stay together: '... omdat ik je morgen opbel.'"
  },
  {
    title: "'want' vs 'omdat'",
    level: "B1",
    body: "'want' keeps main-clause word order: 'Ik bel, want de levering is te laat.' 'omdat' sends the verb to the end: 'Ik bel omdat de levering te laat is.' Use 'omdat' in formal writing, 'want' when speaking."
  },
  {
    title: "Time before place",
    level: "A2",
    body: "Dutch order is time before place: 'Ik bel u morgen vanuit kantoor.' — never 'Ik bel u vanuit kantoor morgen.' Same for dates: 'We ontmoeten elkaar dinsdag in Rotterdam.'"
  },
  {
    title: "'er' + quantity or existence",
    level: "B2",
    body: "'Er' fills the subject slot when the real subject follows: 'Er zijn vier pallets ontvangen.' 'Er is een probleem met de levering.' 'Er zitten drie mensen in het team.'"
  },
  {
    title: "Numbers and change in reports",
    level: "B2",
    body: "'met' = by (amount): 'De omzet steeg met 5%.' 'naar' = to (level): '... naar €2 miljoen.' 'van' = of: 'een stijging van 5%.' 'in vergelijking met' = compared to."
  },
  {
    title: "Softening refusals and deadlines",
    level: "B2",
    body: "Dutch business language softens: 'Helaas moeten we u meedelen dat...' 'In principe mogelijk, maar...' 'Zo spoedig mogelijk' instead of 'nu meteen'. Refusals come with a reason, never bare 'nee'."
  },
  {
    title: "Position of 'niet'",
    level: "B1",
    body: "'Niet' comes after time and place, before the rest: 'We kunnen uw offerte vandaag niet bevestigen.' — time ('vandaag') first, then 'niet'. Compare: 'Ik werk niet in Amsterdam.' (place first would be wrong)."
  }
);

const COMMON_MISTAKES = [
  { wrong: "Ik heb gesproken met hem gisteren.", right: "Ik heb gisteren met hem gesproken.", note: "Time comes before the rest of the sentence, and the conjugated verb stays second.", level: "A2" },
  { wrong: "de rapport / de aanbod / de contract", right: "het rapport / het aanbod / het contract", note: "Learn nouns with their article. These three are common het-words.", level: "A2" },
  { wrong: "...dat je stuurt de offerte.", right: "...dat je de offerte stuurt.", note: "In subclauses (after 'dat', 'omdat', 'als') the verb moves to the end.", level: "A2" },
  { wrong: "Ik heb de e-mail verstuurt.", right: "Ik heb de e-mail verstuurd.", note: "Past participle of 'sturen' is 'verstuurd' with d.", level: "A2" },
  { wrong: "Ik wil graag een informatie ontvangen.", right: "Ik wil graag wat informatie ontvangen.", note: "'Informatie' is uncountable — no 'een', no plural.", level: "B1" },
  { wrong: "op de moment", right: "op dit moment", note: "Fixed expression: 'op dit moment' = at the moment.", level: "A2" },
  { wrong: "Ik ben niet akkoord met het voorstel.", right: "Ik ben het niet eens met het voorstel.", note: "'zijn + eens' for agreement of opinion; 'akkoord gaan' is the verb form.", level: "B1" },
  { wrong: "Dit is meer beter voor de klant.", right: "Dit is beter voor de klant.", note: "No double comparative — 'meer' + comparative is wrong.", level: "A2" },
  { wrong: "Ik werk hier voor drie jaar.", right: "Ik werk hier al drie jaar.", note: "'voor' = planned duration ('voor drie weken'); 'al' = so far.", level: "B1" },
  { wrong: "Ik kijk uit naar uw antwoordt.", right: "Ik kijk uit naar uw antwoord.", note: "'Antwoord' has no -t in writing (only spoken -t after d).", level: "A2" },
  { wrong: "We hebben de contract getekend.", right: "We hebben het contract getekend.", note: "'Contract' is a het-word.", level: "A2" },
  { wrong: "Het spijt me voor de vertraging.", right: "Mijn excuses voor de vertraging.", note: "In business Dutch, 'mijn excuses voor...' or 'sorry voor...' is standard.", level: "B1" }
];

const DICT_EXTRA = {
  "direct": "direct / straightforward", "kwartaalcijfers": "quarterly figures", "stijgen": "to rise", "dalen": "to fall",
  "stijging": "increase", "daling": "decrease", "aandeel": "share (stock)", "aandeelhouder": "shareholder",
  "raad van bestuur": "board of directors", "directie": "the management / board", "omzetgroei": "revenue growth",
  "verlies": "loss", "balans": "balance sheet", "dochterbedrijf": "subsidiary", "medewerker": "employee",
  "vacature": "vacancy / job opening", "salaris": "salary", "ervaring": "experience", "overzicht": "overview",
  "klant": "client / customer", "vlot": "smooth / quick", "doelgericht": "goal-oriented", "aantrekkelijk": "attractive",
  "arbeidsvoorwaarden": "employment conditions", "fulltime": "full-time", "opleiding": "training / education",
  "aanpakken": "to tackle", "zelfstandig": "independent", "nauwkeurig": "precise / accurate", "samenwerking": "collaboration",
  "slagkracht": "decisiveness / drive", "bespreekbaarheid": "culture of openness", "directheid": "directness",
  "borrel": "after-work drinks", "gebruikelijk": "customary", "hiërarchie": "hierarchy", "vlak": "flat (structure)",
  "namelijk": "you see / namely", "echter": "however", "daardoor": "therefore / as a result", "terwijl": "while",
  "ondanks": "despite", "inkoop": "procurement / purchasing", "pallet": "pallet", "expresselevering": "express delivery",
  "transportdocument": "transport document", "ontvanger": "recipient", "leverancier": "supplier"
};

const READING_TEXTS = [
  {
    id: "cultuur",
    title: "Werken bij een Nederlands bedrijf",
    level: "B1",
    paragraphs: [
      "Nederlandse bedrijven staan bekend om hun platte hiërarchie. De manager is geen verre autoriteit, maar een collega die naast je werkt. Medewerkers verwachten dat ze hun mening mogen geven, ook als die afwijkt van de directie. Dit noemt men bespreekbaarheid: alles kan en mag besproken worden, ook kritiek op het beleid.",
      "Directheid hoort daarbij. Een Nederlandse collega zegt bijvoorbeeld: 'Dit voorstel gaat niet werken, want we missen de data.' Dat klinkt onbeleefd voor mensen uit andere culturen, maar het is niet persoonlijk bedoeld. Het gaat om de zaak, niet om de persoon.",
      "Ook de lunch is belangrijk. Tussen 12:00 en 12:30 eet het hele team samen, vaak gewoon brood uit de kantine. Vergaderingen worden niet gepland tijdens de lunch, en na 17:00 gaat het merendeel van de medewerkers naar huis. Werk-privébalans is geen buzzwoord, maar een verwachting."
    ],
    questions: [
      { q: "Wat betekent 'bespreekbaarheid' volgens de tekst?", options: ["Dat vergaderingen kort moeten zijn", "Dat alles besproken mag worden, inclusief kritiek", "Dat de directie beslissingen alleen neemt"], answer: 1, explain: "'Alles kan en mag besproken worden, ook kritiek op het beleid.'" },
      { q: "Hoe bedoelt de collega zijn kritische opmerking?", options: ["Persoonlijk", "Onbeleefd bedoeld", "Over de zaak, niet over de persoon"], answer: 2, explain: "'Het gaat om de zaak, niet om de persoon.'" },
      { q: "Wat is gebruikelijk tijdens de lunch?", options: ["Doorwerken met een boterham achter je bureau", "Samen eten tussen 12:00 en 12:30", "Een vergadering met het team"], answer: 1, explain: "'Tussen 12:00 en 12:30 eet het hele team samen.'" }
    ]
  },
  {
    id: "kwartaal",
    title: "Kwartaalcijfers Havens B.V.",
    level: "B2",
    paragraphs: [
      "Havens B.V., handelaar in industriële onderdelen, heeft de kwartaalcijfers over het derde kwartaal gepubliceerd. De omzet steeg met 8% naar €4,2 miljoen, vooral dankzij de export naar Duitsland en België. De nettowinst bedroeg €310.000, een daling van 4% in vergelijking met vorig jaar.",
      "Directievoorzitter Annemiek Havens noemt de resultaten 'degelijk, maar niet onverdeeld positief'. De marges staan onder druk door hogere grondstofkosten en de wisselkoers van de euro. 'We verwachten herstel in het eerste kwartaal van volgend jaar, mits de grondstofprijzen stabiliseren', aldus Havens.",
      "Het bedrijf investeert dit jaar €600.000 in automatisering van het magazijn. Daardoor, zo verwacht de directie, daalt de doorlooptijd van orders van vijf naar drie werkdagen. De aandeelhouders krijgen ondanks de lagere winst een onveranderd dividend uitgekeerd."
    ],
    questions: [
      { q: "Met hoeveel procent steeg de omzet?", options: ["4%", "8%", "12%"], answer: 1, explain: "'De omzet steeg met 8% naar €4,2 miljoen.'" },
      { q: "Waarom daalde de nettowinst?", options: ["Hogere grondstofkosten en de wisselkoers", "Minder export naar Duitsland", "De investering in automatisering"], answer: 0, explain: "'De marges staan onder druk door hogere grondstofkosten en de wisselkoers van de euro.'" },
      { q: "Wat verwacht de directie van de doorlooptijd?", options: ["Van vijf naar drie werkdagen", "Van drie naar vijf werkdagen", "Geen verandering"], answer: 0, explain: "'...daalt de doorlooptijd van orders van vijf naar drie werkdagen.'" },
      { q: "Wat gebeurt er met het dividend?", options: ["Het wordt verlaagd", "Het blijft gelijk", "Het wordt dit jaar niet uitgekeerd"], answer: 1, explain: "'...krijgen de aandeelhouders ondanks de lagere winst een onveranderd dividend.'" }
    ]
  },
  {
    id: "vacature",
    title: "Vacature: Projectleider Logistiek",
    level: "C1",
    paragraphs: [
      "Ben je de projectleider die onze groei een boost geeft? Van Leeuwen Logistiek, met 240 medewerkers en vestigingen in Rotterdam en Venlo, zoekt per direct een projectleider logistiek. Je bent verantwoordelijk voor de implementatie van ons nieuwe Warehouse Management System en je stuurt een team van zes specialisten aan.",
      "We vragen een afgeronde opleiding op hbo- of universitair niveau, minimaal vijf jaar ervaring in soortgelijke functies en uitstekende beheersing van Nederlands en Engels. Je werkt zelfstandig, bent nauwkeurig en hebt voldoende slagkracht om beslissingen te nemen onder tijdsdruk. Ervaring met procesoptimalisatie is een pré.",
      "Wij bieden een marktconform salaris, goede arbeidsvoorwaarden en volop groeimogelijkheden binnen een organisatie in volle ontwikkeling. Solliciteren kan tot 1 november via ons carrièrepagina. Een assessment maakt deel uit van de procedure."
    ],
    questions: [
      { q: "Wat is de hoofdverantwoordelijkheid van de functie?", options: ["Het magazijn dagelijks leiden", "De implementatie van het WMS", "De sales naar Duitsland"], answer: 1, explain: "'Je bent verantwoordelijk voor de implementatie van ons nieuwe Warehouse Management System.'" },
      { q: "Hoeveel jaar ervaring wordt er minimaal gevraagd?", options: ["Drie jaar", "Vijf jaar", "Tien jaar"], answer: 1, explain: "'...minimaal vijf jaar ervaring in soortgelijke functies.'" },
      { q: "Wat is een 'pré' (aanvullende eis)?", options: ["Ervaring met procesoptimalisatie", "Een rijbewijs", "Kennis van Duits"], answer: 0, explain: "'Ervaring met procesoptimalisatie is een pré.'" }
    ],
    wordBank: true
  }
];

const ERROR_TEXTS = [
  {
    title: "Zakelijke e-mail — vind de fouten",
    level: "B1",
    items: [
      { words: ["Ik", "heb", "gesproken", "met", "hem", "gisteren", "over", "de", "levering."], wrong: 5, correct: "gisteren → eerst", note: "Tijd staat vóór de rest: 'Ik heb gisteren met hem gesproken.'" },
      { words: ["We", "hebben", "de", "contract", "getekend", "voor", "twee", "jaar."], wrong: 3, correct: "de → het", note: "'Contract' is een het-woord: 'het contract'." },
      { words: ["Ik", "heb", "de", "offerte", "gisteren", "verstuurt", "naar", "de", "klant."], wrong: 5, correct: "verstuurt → verstuurd", note: "Voltooid deelwoord van 'sturen' is 'verstuurd'." },
      { words: ["Zij", "zei", "dat", "zij", "stuurt", "de", "notulen", "vandaag."], wrong: 4, correct: "stuurt → zou sturen / stuurde", note: "In de bijzin gaat het werkwoord naar het einde: 'dat zij de notulen vandaag stuurt'." },
      { words: ["Op", "de", "moment", "werken", "aan", "de", "oplossing."], wrong: 2, correct: "de → dit", note: "Vaste uitdrukking: 'op dit moment'." }
    ]
  },
  {
    title: "Vergader-notulen — vind de fouten",
    level: "B2",
    items: [
      { words: ["Het", "vergadering", "begint", "om", "9:00", "in", "zaal", "B."], wrong: 1, correct: "Het → De", note: "'Vergadering' is een de-woord: 'de vergadering'." },
      { words: ["Wij", "kunnen", "uw", "offerte", "niet", "vandaag", "bevestigen."], wrong: 5, correct: "niet vandaag → vandaag niet", note: "'Niet' staat na de tijd: 'vandaag niet bevestigen'." },
      { words: ["Dit", "is", "meer", "beter", "voor", "onze", "klanten."], wrong: 2, correct: "meer beter → beter", note: "Geen dubbele vergrotende trap: 'beter'." },
      { words: ["Ik", "werk", "hier", "voor", "drie", "jaar", "en", "woord", "projectleider."], wrong: 7, correct: "woord → wordt", note: "'Wordt' (van worden), niet 'woord'." },
      { words: ["De", "directie", "heeft", "het", "voorstel", "afgewezen", "omdat", "de", "kosten", "was", "te", "hoog."], wrong: 9, correct: "was → waren", note: "'De kosten' is meervoud: 'omdat de kosten waren te hoog'." }
    ]
  }
];

SCENARIOS.push(
  {
    id: "angry-client",
    type: "branch",
    title: "De ontevreden klant",
    titleEn: "The unhappy client",
    level: "B2",
    icon: "😠",
    blurb: "A branching phone call: your choices decide how the conversation with an angry client ends.",
    tips: [
      "Acknowledge emotions first, then move to facts — even if the client is wrong.",
      "Never send a client away empty-handed: always come with an action or a deadline.",
      "Your satisfaction score changes with every choice — try to reach the best ending."
    ],
    steps: [],
    start: "n1",
    nodes: {
      n1: {
        bot: "Goedemiddag, u spreekt met mevrouw Kramer, inkoopmanager bij Veldhuizen B.V. Ik moet zeggen: ik ben niet blij. De levering van vorige week is nog steeds niet compleet!",
        en: "Good afternoon, this is Mrs Kramer, purchasing manager at Veldhuizen B.V. I have to say: I'm not happy. Last week's delivery is still incomplete!",
        options: [
          { text: "Mijn excuses, mevrouw Kramer. Ik ga er meteen voor u achteraan.", next: "n2a", mood: 1, note: "Excuses + immediate action — exactly right." },
          { text: "Dat klopt niet, wij hebben alles geleverd volgens onze administratie.", next: "n2b", mood: -1, note: "Defensive first — the client feels unheard." },
          { text: "Ik begrijp uw frustratie. Mag ik de details even opzoeken?", next: "n2a", mood: 1, note: "Acknowledging frustration before facts — very good." }
        ]
      },
      n2a: {
        bot: "Dat waardeer ik. Het gaat om order 4471: tien pallets, en wij hebben er zes ontvangen.",
        en: "I appreciate that. It's about order 4471: ten pallets, and we received six.",
        options: [
          { text: "Ik controleer de order en bel u binnen een uur terug met een oplossing.", next: "n3a", mood: 1, note: "Concrete action + concrete deadline." },
          { text: "Dan moet u contact opnemen met onze logistiekafdeling.", next: "n3b", mood: -1, note: "Sending the client to another department is the classic mistake." },
          { text: "Zijn er ook producten beschadigd aangekomen?", next: "n2c", mood: 0, note: "A good clarifying question." }
        ]
      },
      n2c: {
        bot: "Nee, niets is beschadigd, er ontbreken gewoon vier pallets. Wat gaat u daar nu aan doen?",
        en: "No, nothing is damaged, four pallets are simply missing. What are you going to do about that now?",
        options: [
          { text: "Ik controleer de order en bel u binnen een uur terug met een oplossing.", next: "n3a", mood: 1, note: "Concrete action + concrete deadline." },
          { text: "Dan moet u contact opnemen met onze logistiekafdeling.", next: "n3b", mood: -1, note: "Sending the client away — wrong move." }
        ]
      },
      n2b: {
        bot: "Volgens mijn administratie hebben wij tien pallets besteld en zes ontvangen. Ik heb het transportdocument hier liggen.",
        en: "According to my records we ordered ten pallets and received six. I have the transport document right here.",
        options: [
          { text: "Mijn excuses. Dan nemen we het transportdocument samen even door.", next: "n2a", mood: 1, note: "Recovering well: apologies and cooperation." },
          { text: "Dan zal er iets mis zijn met uw administratie.", next: "n3b", mood: -1, note: "Blaming the client — conversation is getting worse." }
        ]
      },
      n3a: {
        bot: "Prima. Wat stelt u voor?",
        en: "Good. What do you propose?",
        options: [
          { text: "We sturen de ontbrekende pallets morgen met een expresselevering, zonder kosten voor u.", next: "end_good", mood: 1, note: "Fast solution, no cost to the client — excellent." },
          { text: "We kunnen de pallets volgende week meesturen met een normale levering.", next: "end_neutral", mood: 0, note: "A solution, but slow for a client who is already waiting." },
          { text: "Dat kan ik niet beloven, ik moet eerst mijn manager vragen.", next: "end_bad", mood: -1, note: "Empty hands again — the client loses patience." }
        ]
      },
      n3b: {
        bot: "Dit is de laatste keer dat ik hierover telefoneren. Ik verwacht vandaag nog een oplossing per e-mail.",
        en: "This is the last time I discuss this by phone. I expect a solution by email today.",
        options: [
          { text: "Begrijpelijk. Ik stuur u binnen een uur een e-mail met een concrete oplossing en een datum.", next: "end_neutral", mood: 0, note: "You saved what could be saved." },
          { text: "Onze serviceafdeling neemt zo spoedig mogelijk contact met u op.", next: "end_bad", mood: -1, note: "Vague and deflecting — the relationship is damaged." }
        ]
      },
      end_good: {
        bot: "Uitstekend, zo werken wij het liefst met een leverancier. Dan bespreken we volgende week ook de vervolgorder.",
        en: "Excellent, that's how we prefer to work with a supplier. Then next week we'll also discuss the follow-up order.",
        ending: "good"
      },
      end_neutral: {
        bot: "Prima, ik verwacht uw e-mail. Maar ik hoop dat dit de laatste keer is.",
        en: "Fine, I expect your email. But I hope this is the last time.",
        ending: "neutral"
      },
      end_bad: {
        bot: "Dat is niet wat ik verwacht van een leverancier. Ik ga dit bespreken met het management.",
        en: "That is not what I expect from a supplier. I'm going to discuss this with management.",
        ending: "bad"
      }
    }
  }
);

const DICTATION_SENTENCES = [
  { nl: "Goedemorgen, u spreekt met Sanne de Vries.", en: "Good morning, you're speaking with Sanne de Vries." },
  { nl: "Ik stuur u vandaag nog de bevestiging per e-mail.", en: "I'll send you the confirmation by email today." },
  { nl: "Zou de levering uiterlijk vrijdag binnen kunnen zijn?", en: "Could the delivery arrive by Friday at the latest?" },
  { nl: "We lopen iets vertraging op door ziekte in het team.", en: "We're running slightly behind due to illness in the team." },
  { nl: "Het rapport is klaar en ligt in bijlage.", en: "The report is finished and attached." },
  { nl: "Ik neem de actiepunten voor mijn rekening.", en: "I'll take care of the action points." },
  { nl: "De omzet is dit jaar met twaalf procent gestegen.", en: "Revenue rose by twelve percent this year." },
  { nl: "Kunt u de offerte vóór maandag toesturen?", en: "Could you send the quotation before Monday?" },
  { nl: "Ik wil graag een afspraak maken voor volgende week dinsdag.", en: "I'd like to make an appointment for next Tuesday." },
  { nl: "De marges staan onder druk door hogere kosten.", en: "The margins are under pressure due to higher costs." },
  { nl: "Ik stel voor om de deadline met een week te verlengen.", en: "I propose extending the deadline by one week." },
  { nl: "Met vriendelijke groet, Pieter Bakker.", en: "Kind regards, Pieter Bakker." }
];
