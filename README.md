# Dummy data!

To test our new statistics service, we need to be able to generate lots of dummy data. We need *you* to create a function (or set of functions) that we can use to create random data based on the following inputs
    - year (number, for example 2021)
    - month (number between 1 and 12)
    - dayStart (number between 1 and 31)
    - dayEnd (number between 1 and 31)
    - arrayOfSalespersons (array of Strings like ["Maria", "Marko", ... ])


You can trust the input data (for example that the dayStart is before the dayEnd).

We need your function(s) to generate records of purchases. Each record your function(s) generate should be an object that looks like the following:

        { time: "08:31:21 1.1.2021", totalPrice: 15.75, salespersons: "Maria" }

You need to generate purchases for each of the days in the give time period, spread throughout the day between 08:00:00 and 19:00:00.

Each day needs to have a random amount of purchases between 50 and 700.

Each of the records needs to be registered to one salesperson and each record needs to have a total price between 0.50 and 100.00.

We will call your function like this:

    const dummyDataForFirstWeekOfDecember2020 = generateDummyData(2020, 12, 1, 7, ["Ahmad", "Xiaofeng", "Ianto"])

In this example, we expect `dummyDataForFirstWeekOfDecember2020` to be an array of objects containing at least 350 and at most 4900 objects (50-700 per day).



- 🐒