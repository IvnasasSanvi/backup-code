import mongoose  from 'mongoose';
mongoose.connect('mongodb://mongodb+srv://sanvijsr1_db_user:Sanvijsr16@cluster0.px5mkid.mongodb.net/suume');

const Cat = mongoose.model('Cat', { name: String });

const kitty = new Cat({ name: 'Zildjian' });
kitty.save().then(() => console.log('meow'));