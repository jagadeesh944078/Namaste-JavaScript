console.log(this, "global space");

function x() {
  console.log(this); // diffrent value in strict mode and non strict mode
}

x();
window.x(); //in strict mode if you use like this you will get window object

// in object it works diffrently
const student = {
  name: "Jagadeesh",
  printName: function () {
    console.log(this.name, "inside object");
  },
};

student.printName();

const student2 = {
  name: "rajendhar",
};

student.printName.call(student2);

// inside object using arrow function

// it will give it enclosing lexical context value of this here its global space so value is window object
const obj = {
  name: "rajashekar",
  printName: () => {
    console.log(this, "inside arrow function");
  },
};

obj.printName();

// inside nested arrow function

const obj2 = {
  value: 10,
  printName: function () {
    const y = () => {
      console.log(this);
    };
    y();
  },
};

obj2.printName();

// this inside DOM => reference to HTMLelement`
