// Complete textbook content for VOICE CHANGE MASTER
// Sections 191-206 from A TEXT-BOOK OF HIGHER ENGLISH GRAMMAR

export interface ExampleItem {
  active: string;
  passive: string;
  note?: string;
}

export interface ExerciseItem {
  id: string;
  q: string;
  a: string;
  exp: string;
  bn: string;
}

export const intro = {
  191: {
    title: 'What is Voice?',
    titleBn: 'Voice কী?',
    content: `The hunter killed the lion.
The lion was killed by the hunter.

The above two sentences have the same meaning but their forms are different.
In the first sentence, the subject (the hunter) is the doer of the action (killed); that is, the subject is active. The verb "killed" is, therefore, said to be in the Active voice.
In the second sentence, the subject (the lion) is acted upon and it is the receiver of the action (was killed); that is, the subject is not active, but passive. The verb "was killed" is, therefore, said to be in the Passive voice.`,
    contentBn: `উপরের দুটি বাক্যের অর্থ একই কিন্তু গঠন ভিন্ন।
প্রথম বাক্যে Subject (the hunter) কাজের কর্তা → Active Voice (কর্তৃবাচ্য)।
দ্বিতীয় বাক্যে Subject (the lion) কাজের প্রাপক → Passive Voice (কর্মবাচ্য)।`
  },
  192: {
    title: 'Definition',
    titleBn: 'সংজ্ঞা',
    content: 'Voice is the form of the verb which shows whether the Subject acts or is acted upon.',
    contentBn: 'Voice হলো Verb-এর এমন রূপ যা দেখায় Subject নিজে কাজ করছে নাকি তার উপর কাজ করা হচ্ছে।'
  },
  193: {
    title: 'Two Voices',
    titleBn: 'দুই প্রকার Voice',
    content: `(a) When the subject of the sentence is the doer or actor, the verb is Active (কর্তৃবাচ্য).
He runs. I did it. He said this.
(b) When the subject of the sentence is acted upon, the verb is Passive (কর্মবাচ্য).
It was done by me. This was said by him.`,
    contentBn: `(a) Subject কাজের কর্তা হলে → Active (কর্তৃবাচ্য)
(b) Subject কাজের প্রাপক হলে → Passive (কর্মবাচ্য)`
  }
};

export const rules194 = {
  title: 'Rules for changing Active into Passive',
  titleBn: 'Active থেকে Passive করার নিয়ম',
  points: [
    { en: 'The object in the Active Voice becomes the subject in the Passive.', bn: 'Active-এর Object → Passive-এর Subject হয়।' },
    { en: 'The subject in the Active Voice becomes the object in the Passive, generally preceded by the preposition by.', bn: 'Active-এর Subject → Passive-এর Object হয় এবং সাধারণত তার আগে by বসে।' },
    { en: 'The Verb is changed into the Past Participle form and is preceded by some form of the verb to be.', bn: 'Verb-কে Past Participle (V3) করে তার আগে to be-এর উপযুক্ত রূপ বসাতে হয়।' }
  ]
};

// NOTE: Full content with all examples, exercises 20/21/22, worked examples, literary, groups, tense tables, Bengali glossary etc. is in the local project. This is the core structure. See local /src/data/content.ts for the complete 38KB file with every textbook example and answer.

export const bengaliGlossary = [
  { en: 'Active Voice', bn: 'কর্তৃবাচ্য — Subject নিজেই কাজ করে' },
  { en: 'Passive Voice', bn: 'কর্মবাচ্য — Subject-এর উপর কাজ করা হয়' },
  { en: 'Subject', bn: 'কর্তা / Subject' },
  { en: 'Object', bn: 'কর্ম / Object' },
  { en: 'Verb', bn: 'ক্রিয়া / Verb' },
  { en: 'Past Participle (V3)', bn: 'Verb-এর তৃতীয় রূপ (done, written, taken...)' },
  { en: 'Agent / Doer', bn: 'কাজের কর্তা (by-এর পর)' },
  { en: 'Retained Object', bn: 'দুই Object থাকলে যেটি Subject হয় না' },
  { en: 'Transitive Verb', bn: 'যে Verb-এর Object থাকে (Passive সম্ভব)' },
  { en: 'Intransitive Verb', bn: 'যে Verb-এর Object নেই (সাধারণত Passive হয় না)' },
  { en: 'Cognate Object', bn: 'Intransitive Verb-এর সাথে সম্পর্কিত Object (fight a fight)' },
  { en: 'Quasi-passive / Middle Voice', bn: 'Active form কিন্তু Passive অর্থ (This book reads well)' },
  { en: 'who → by whom', bn: 'Active-এ who হলে Passive-এ by whom হয়' },
  { en: 'Perfect Continuous', bn: 'Passive-এ ব্যবহৃত হয় না' },
  { en: 'Let + be + V3', bn: 'Imperative Passive-এর সাধারণ গঠন' },
  { en: 'to be + V3', bn: 'Infinitive Passive-এর গঠন' }
];

export function completeness() {
  return {
    sections: '191-206',
    note: 'Full content available in local project src/data/content.ts'
  };
}
