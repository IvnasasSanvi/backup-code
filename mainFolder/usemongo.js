// import mongoose from "mongoose";

// mongoose.connect(
//   "mongodb+srv://sanvijsr1_db_user:Sanvijsr16@cluster0.px5mkid.mongodb.net/sanvi?retryWrites=true&w=majority"
// )
// .then(() => console.log("MongoDB connected"))
// .catch(err => console.error(err.message));

// const Cat = mongoose.model("Cat", { name: String });

// const kitty = new Cat({ name: "Zildjian" });
// kitty.save().then(() => console.log("meow"));


// import mongoose from "mongoose";

// async function main() {
//   try {
//     await mongoose.connect(
//   "mongodb+srv://sanvijsr1_db_user:Sanvijsr16@cluster0.px5mkid.mongodb.net/user?retryWrites=true&w=majority"
// );


//     console.log("MongoDB connected");

//     const Cat = mongoose.model("Cat", { name: String });

//     const kitty = new Cat({ name: "Zildjian" });
//     await kitty.save();

//     console.log("meow");
//     process.exit(0);

//   } catch (err) {
//     console.error("Mongo error:", err.message);
//   }
// }

// main();


import mongoose from "mongoose";

async function main() {
  try {
    await mongoose.connect(
      "mongodb+srv://sanvijsr1_db_user:Sanvijsr16@cluster0.px5mkid.mongodb.net/sanvi?retryWrites=true&w=majority"
    );

    console.log("MongoDB connected");

    const Cat = mongoose.model("Cat", { name: String });

    const kitty = new Cat({ name: "Zildjian" });
    await kitty.save();

    console.log("meow");
    await mongoose.disconnect();

  } catch (err) {
    console.error("Mongo error:", err.message);
  }
}

main();