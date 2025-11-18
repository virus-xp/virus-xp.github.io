export interface QAItem {
  id: number;
  question: string;
  theory: string;
  code?: string;
}

export const QA_DATA: QAItem[] = [
  {
    id: 1,
    question: 'Q1. Nested if statement in Java! Example program using nested if',
    theory: `<p>A nested <code>if</code> statement is an <code>if</code> statement that is the target of another <code>if</code> or <code>else</code> statement. Nested <code>if</code> statements mean an <code>if</code> statement inside another if statement. Java allows us to nest if statements within if statements. i.e, we can place an <code>if</code> statement inside another <code>if</code> statement.</p>
<p><strong>Syntax:</strong></p>
<pre><code>if (condition1) {
   // Executes when condition1 is true
   if (condition2) {
      // Executes when condition2 is true
   }
}</code></pre>
<p>This structure is useful for testing a series of conditions where one depends on the other. For example, checking if a number is positive before checking if it's even.</p>`,
    code: `public class NestedIfExample {
    public static void main(String[] args) {
        // Creating two variables for age and weight
        int age = 20;
        int weight = 80;

        // Applying condition on age and weight
        if (age >= 18) {
            System.out.println("Age is 18 or greater.");
            if (weight > 50) {
                System.out.println("Weight is greater than 50.");
                System.out.println("You are eligible to donate blood.");
            } else {
                System.out.println("Weight is 50 or less.");
                System.out.println("You are not eligible to donate blood.");
            }
        } else {
            System.out.println("Age is less than 18.");
            System.out.println("You are not eligible to donate blood.");
        }
    }
}`
  },
  {
    id: 2,
    question: 'Q2. What is the super keyword in Java and what are its main uses?',
    theory: `<p>The <strong>super</strong> keyword in Java is a reference variable that is used to refer to the immediate parent class object.</p>
<p><strong>Main Uses of the <code>super</code> Keyword:</strong></p>
<ol>
  <li><strong>To access instance variables of the parent class:</strong> It's used when the parent and child classes have member variables with the same name. <code>super.variableName</code> refers to the parent's variable.</li>
  <li><strong>To invoke methods of the parent class:</strong> It's used to call a method of the parent class, especially when the child class has overridden that method. <code>super.methodName()</code> calls the parent's version.</li>
  <li><strong>To invoke the constructor of the parent class:</strong> <code>super()</code> is used to call the parent class's constructor from the child class's constructor. This must be the first statement in the child constructor.</li>
</ol>`,
    code: `// Parent class
class Animal {
    String color = "white";

    Animal() {
        System.out.println("Animal is created");
    }

    void eat() {
        System.out.println("eating...");
    }
}

// Child class
class Dog extends Animal {
    String color = "black";

    Dog() {
        super(); // 3. Invokes parent class constructor
        System.out.println("Dog is created");
    }

    void printColor() {
        System.out.println("Dog's color: " + color); // Prints color of Dog class
        System.out.println("Animal's color: " + super.color); // 1. Accesses parent instance variable
    }

    @Override
    void eat() {
        System.out.println("eating bread...");
    }

    void bark() {
        System.out.println("barking...");
    }

    void work() {
        super.eat(); // 2. Invokes parent class method
        bark();
    }
}

public class SuperKeywordExample {
    public static void main(String[] args) {
        Dog d = new Dog();
        d.printColor();
        System.out.println("---");
        d.work();
    }
}`
  },
  {
    id: 3,
    question: 'Q3. JVM concept, its architecture',
    theory: `<p>The <strong>Java Virtual Machine (JVM)</strong> is an abstract machine. It is a specification that provides a runtime environment in which Java bytecode can be executed. It follows three main principles: <em>specification</em>, <em>implementation</em>, and <em>instance</em>.</p>
<p><strong>JVM Architecture:</strong></p>
<p>The JVM is divided into three main subsystems:</p>
<ol>
    <li><strong>Classloader Subsystem:</strong> Responsible for Loading, Linking, and Initialization.
        <ul>
            <li><strong>Loading:</strong> Reads the <code>.class</code> file, generates binary data, and saves it in the method area.</li>
            <li><strong>Linking:</strong> Performs verification, preparation, and (optionally) resolution.</li>
            <li><strong>Initialization:</strong> Assigns original values to static variables and executes static blocks.</li>
        </ul>
    </li>
    <li><strong>Runtime Data Areas:</strong> Memory areas used by the JVM during execution.
        <ul>
            <li><strong>Method Area:</strong> Stores per-class structures.</li>
            <li><strong>Heap Area:</strong> Memory for all class instances and arrays.</li>
            <li><strong>Stack Area:</strong> Stores local variables and partial results for method invocation.</li>
            <li><strong>PC Registers:</strong> Address of the current JVM instruction.</li>
            <li><strong>Native Method Stacks:</strong> For native methods used in the application.</li>
        </ul>
    </li>
    <li><strong>Execution Engine:</strong>
        <ul>
            <li><strong>Interpreter:</strong> Interprets and executes bytecode instructions one by one.</li>
            <li><strong>JIT (Just-In-Time) Compiler:</strong> Improves performance by compiling parts of the bytecode.</li>
            <li><strong>Garbage Collector (GC):</strong> Manages memory automatically.</li>
        </ul>
    </li>
</ol>`,
  },
  {
    id: 4,
    question: 'Q4. Static and final keywords in java?',
    theory: `<p><strong>static Keyword:</strong></p>
<p>The <code>static</code> keyword is used for memory management mainly. We can apply the static keyword with variables, methods, blocks, and nested classes. The static keyword belongs to the class rather than an instance of the class.</p>
<ul>
    <li><strong>Static Variable:</strong> Also known as a class variable. It is common to all instances (objects) of the class.</li>
    <li><strong>Static Method:</strong> Belongs to the class and can be invoked without creating an instance of a class.</li>
    <li><strong>Static Block:</strong> Used to initialize static data members. It is executed before the main method.</li>
</ul>
<p><strong>final Keyword:</strong></p>
<p>The <code>final</code> keyword is used to restrict the user. It can be applied to variables, methods, and classes.</p>
<ul>
    <li><strong>Final Variable:</strong> Once assigned a value, it cannot be changed (it becomes a constant).</li>
    <li><strong>Final Method:</strong> Cannot be overridden by a subclass.</li>
    <li><strong>Final Class:</strong> Cannot be extended (subclassed).</li>
</ul>`,
    code: `public class KeywordsExample {

    // --- STATIC keyword examples ---
    static int staticVar = 10; // Static variable
    final int finalVar; // Blank final variable

    static {
        System.out.println("Static block is invoked.");
        // staticVar can be initialized here
    }

    public KeywordsExample() {
        // A blank final variable can be initialized only in a constructor.
        finalVar = 100;
    }

    // Static method
    static void staticMethod() {
        System.out.println("This is a static method.");
        // System.out.println(finalVar); // Cannot access non-static members
        System.out.println("Static variable value: " + staticVar);
    }

    // --- FINAL keyword examples ---
    final void finalMethod() {
        System.out.println("This is a final method. It cannot be overridden.");
    }

    public static void main(String[] args) {
        // Calling static method without creating an object
        staticMethod();
        System.out.println("Initial staticVar: " + KeywordsExample.staticVar);
        KeywordsExample.staticVar = 20; // Modifying static variable
        System.out.println("Modified staticVar: " + KeywordsExample.staticVar);

        KeywordsExample obj = new KeywordsExample();
        System.out.println("Final variable value: " + obj.finalVar);
        // obj.finalVar = 200; // This would cause a compile-time error
        obj.finalMethod();
    }
}

// Final class - cannot be extended
final class FinalClass {
    void display() {
        System.out.println("This is a final class.");
    }
}

// class SubClass extends FinalClass { } // This would cause a compile-time error
`
  }
];