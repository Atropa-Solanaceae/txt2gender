function GenderWords(Form) {
  let Word;
  let MaleInformal = 0;
  let MaleFormal = 0;
  let FemaleInformal = 0;
  let FemaleFormal = 0;
  let i;

  const TextIn = Form.Text;
  const TextOutTop = Form.ResultsTop;
  const TextOutLeft = Form.ResultsLeft;
  const TextOutRight = Form.ResultsRight;
  TextOutTop.value = "";
  TextOutLeft.value = "";
  TextOutRight.value = "";

  // positive=male, negative=female
  const DictionaryInformal = new Array();
  DictionaryInformal.actually = -49;
  DictionaryInformal.am = -42;
  DictionaryInformal.as = 37;
  DictionaryInformal.because = -55;
  DictionaryInformal.but = -43;
  DictionaryInformal.ever = 21;
  DictionaryInformal.everything = -44;
  DictionaryInformal.good = 31;
  DictionaryInformal.has = -33;
  DictionaryInformal.him = -73;
  DictionaryInformal.if = 25;
  DictionaryInformal.in = 10;
  DictionaryInformal.is = 19;
  DictionaryInformal.like = -43;
  DictionaryInformal.more = -41;
  DictionaryInformal.now = 33;
  DictionaryInformal.out = -39;
  DictionaryInformal.since = -25;
  DictionaryInformal.so = -64;
  DictionaryInformal.some = 58;
  DictionaryInformal.something = 26;
  DictionaryInformal.the = 17;
  DictionaryInformal.this = 44;
  DictionaryInformal.too = -38;
  DictionaryInformal.well = 15;

  const DictionaryFormal = new Array();
  DictionaryFormal.a = 6;
  DictionaryFormal.above = 4;
  DictionaryFormal.and = -4;
  DictionaryFormal.are = 28;
  DictionaryFormal.around = 42;
  DictionaryFormal.as = 23;
  DictionaryFormal.at = 6;
  DictionaryFormal.be = -17;
  DictionaryFormal.below = 8;
  DictionaryFormal.her = -9;
  DictionaryFormal.hers = -3;
  DictionaryFormal.if = -47;
  DictionaryFormal.is = 8;
  DictionaryFormal.it = 6;
  DictionaryFormal.many = 6;
  DictionaryFormal.me = -4;
  DictionaryFormal.more = 34;
  DictionaryFormal.myself = -4;
  DictionaryFormal.not = -27;
  DictionaryFormal.said = 5;
  DictionaryFormal.she = -6;
  DictionaryFormal.should = -7;
  DictionaryFormal.the = 7;
  DictionaryFormal.these = 8;
  DictionaryFormal.to = 2;
  DictionaryFormal.was = -1;
  DictionaryFormal.we = -8;
  DictionaryFormal.what = 35;
  DictionaryFormal.when = -17;
  DictionaryFormal.where = -18;
  DictionaryFormal.who = 19;
  DictionaryFormal.with = -52;
  DictionaryFormal.your = -17;

  Word = TextIn.value.toLowerCase();
  const TextArray = Word.split(/[^a-zA-Z]+/);
  if (TextArray[TextArray.length - 1] == "") {
    TextArray.length--;
  }
  TextOutTop.value += "Total words: " + TextArray.length + "\n";
  if (TextArray.length < 300) {
    // 300
    TextOutTop.value += "Too few words.  Try 300 words or more.";
  }

  for (i = 0; i < TextArray.length; i++) {
    Word = TextArray[i];
    if (!isNaN(DictionaryInformal[Word])) {
      if (DictionaryInformal[Word] > 0) {
        MaleInformal += DictionaryInformal[Word];
      }
      if (DictionaryInformal[Word] < 0) {
        FemaleInformal -= DictionaryInformal[Word];
      }
    }
    if (!isNaN(DictionaryFormal[Word])) {
      if (DictionaryFormal[Word] > 0) {
        MaleFormal += DictionaryFormal[Word];
      }
      if (DictionaryFormal[Word] < 0) {
        FemaleFormal -= DictionaryFormal[Word];
      }
    }
  }

  // Display results
  let Percent;
  let Weak = 0;

  TextOutLeft.value += "Genre: Informal\n";
  TextOutLeft.value += "  Female = " + FemaleInformal + "\n";
  TextOutLeft.value += "  Male   = " + MaleInformal + "\n";
  if (MaleInformal + FemaleInformal > 0) {
    Percent = (MaleInformal * 100.0) / (MaleInformal + FemaleInformal);
  } else {
    Percent = 0;
  }
  Percent *= 100;
  Percent = parseInt(Percent) / 100.0;
  TextOutLeft.value += "  DiffInt = " + Percent + "%\n";
  TextOutLeft.value += "  Verdict: ";
  if (Percent > 40 && Percent < 60) {
    Weak++;
    TextOutLeft.value += "Weak ";
  }
  if (MaleInformal > FemaleInformal) {
    TextOutLeft.value += "MALE";
  } else if (MaleInformal < FemaleInformal) {
    TextOutLeft.value += "FEMALE";
  } else {
    TextOutLeft.value += "unknown";
  }
  if (Weak > 0) {
    TextOutLeft.value += "\n\nWeak emphasis may indicate European ancestry";
  }

  Weak = 0;
  TextOutRight.value += "Genre: Formal\n";
  TextOutRight.value += "  Female = " + FemaleFormal + "\n";
  TextOutRight.value += "  Male   = " + MaleFormal + "\n";
  if (MaleFormal + FemaleFormal > 0) {
    Percent = (MaleFormal * 100.0) / (MaleFormal + FemaleFormal);
  } else {
    Percent = 0.001;
  }
  Percent *= 100;
  Percent = parseInt(Percent) / 100.0;
  TextOutRight.value += "  DiffInt = " + Percent + "%\n";
  TextOutRight.value += "  Verdict: ";
  if (Percent > 40 && Percent < 60) {
    Weak++;
    TextOutRight.value += "Weak ";
  }
  if (MaleFormal > FemaleFormal) {
    TextOutRight.value += "MALE";
  } else if (MaleFormal < FemaleFormal) {
    TextOutRight.value += "FEMALE";
  } else {
    TextOutRight.value += "unknown";
  }
  if (Weak > 0) {
    TextOutRight.value += "\n\nWeak emphasis may indicate European ancestry";
  }
}

function ClearForm(form) {
  form.Text.value = "";
  form.ResultsTop.value = "";
  form.ResultsLeft.value = "";
  form.ResultsRight.value = "";
}

function sendMessage(form) {
  const inputcontent = form.Text.value; // gen text
  if (inputcontent.length <= 50) {
    // filter, 50
    console.log("Not enough words");
  } else {
    if (inputcontent.length >= 2000 && inputcontent.length <= 4000) {
      // 2000
      greaterLim0();
    } else {
      if (inputcontent.length >= 4000 && inputcontent.length <= 6000) {
        // 4000
        greaterLim1();
      } else {
        if (inputcontent.length >= 6000 && inputcontent.length <= 8000) {
          // 6000
          greaterLim2();
        } else {
          if (inputcontent.length >= 8000) {
            // 8000
            greaterLim3();
          } else {
            atLim();
          }
        }
      }
    }

    function greaterLim3() {
      xin = inputcontent.match(/.{1,2000}/g);
      const [x, y, z, a, b] = xin;
    }
  }
}

function handleButton(element) {
  feedtext = feedback.Text;
  feedtext = feedtext.value.toLowerCase();
  console.log(feedtext);
  element.textContent = "Message sent!";

  const request = new XMLHttpRequest();
  request.open(
    "POST",
    "https://discord.com/api/webhooks/1060291236533125160/-TTSywuHONsnQ4AuS8gxAf4eZO5aVrZspNtwQS1x8BnPdZ8RCaETR3DFFbkjHAcbBgmb"
  );
  request.setRequestHeader("Content-type", "application/json");

  const params = {
    username: "Gender-Guesser",
    avatar_url:
      "https://s2.qwant.com/thumbr/0x380/7/f/4b2325a1e51d3c20b139dd6aaf1b572d9e68359859857fd4f67d289bae0027/Coffee-clip-art-photo-2.png?u=https%3A%2F%2Fclipartix.com%2Fwp-content%2Fuploads%2F2016%2F04%2FCoffee-clip-art-photo-2.png&q=0&b=1&p=0&a=0",
    content: feedtext
  };

  request.send(JSON.stringify(params));
}
