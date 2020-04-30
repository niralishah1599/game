import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-quiz',
  templateUrl: './quiz.component.html',
  styleUrls: ['./quiz.component.scss']
})
export class QuizComponent implements OnInit {

  str = "";
  questions: any;
  currentIndex: number;

  currentQuestionSet: any;

  timeLeft: number = 30;
  interval;

  newArray: any = [];

  constructor(private router: Router) {

    //Creating summy questions Json dta
    this.questions = [
      {
        id: 1,
        question: 'What is the full form of IP?',
        option: [
          { optionid: 'A', name: 'Internet program' },
          { optionid: 'B', name: 'Internet protocol' },
          { optionid: 'C', name: 'Interface program' },
          { optionid: 'D', name: 'Interface protocol' }
        ],
        answer: 2,
        selected: 0
      },
      {
        id: 2,
        question: 'Select the smallest memory size',
        option: [
          { optionid: 'A', name: 'kilobyte' },
          { optionid: 'B', name: 'megabyte' },
          { optionid: 'C', name: 'gigabyte' },
          { optionid: 'D', name: 'terabyte' }
        ],
        answer: 1,
        selected: 0
      },
      {
        id: 3,
        question: 'What is the full form of IP?',
        option: [
          { optionid: 'A', name: 'Internet program' },
          { optionid: 'B', name: 'Internet protocol' },
          { optionid: 'C', name: 'Interface program' },
          { optionid: 'D', name: 'Interface protocol' }
        ],
        answer: 2,
        selected: 0
      },
      {
        id: 4,
        question: 'Select the smallest memory size',
        option: [
          { optionid: 'A', name: 'kilobyte' },
          { optionid: 'B', name: 'megabyte' },
          { optionid: 'C', name: 'gigabyte' },
          { optionid: 'D', name: 'terabyte' }
        ],
        answer: 1,
        selected: 0
      }
    ];

    this.currentIndex = 0;
    this.currentQuestionSet = this.questions[this.currentIndex];
  }

  getCheckboxValues(event, data) {
    var index = this.newArray.findIndex(x => x.options == data);

    if (event) {
      let obj = data
      this.newArray.push(obj);
    }
    else {
      this.newArray.splice(index, 1);
    }
    this.str = this.newArray.join('-');



  }
  checkIfNameExists(arr, newName) {
    return arr.some(function (e) {
      return e.options === newName;
    });
  }

  next() {
    this.timeLeft = 30;
    this.str = "";
    this.newArray = []
    this.currentIndex = this.currentIndex + 1;
    this.currentQuestionSet = this.questions[this.currentIndex];
    console.log(this.currentIndex);

  }

  ngOnInit() {
    this.timer();
  }

  timer() {
    this.newArray = [];
    this.interval = setInterval(() => {
      if (this.timeLeft > 0) {
        this.timeLeft--;

      } else {
        this.next();
        if (this.questions.length == 4) {
          this.submit();
        }
        console.log("finished");
      }
    }, 1000)
  }

  submit() {
    this.router.navigateByUrl('/lastpage');
  }


}
