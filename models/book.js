const Mongoose = require('mongoose');

const bookSchema = new Mongoose.Schema(
    {
        title: {
            type: String,
            required: true,
        },
    }, 
    {timestamps: true}
);

bookSchema.method('toClient', function() {
    var obj = this.toObject();

    //Rename fields
    obj.id = obj._id;

    // Delete fields
    delete obj._id;
    delete obj.__v;
    delete obj.createdAt;
    delete obj.updatedAt;

    return obj;
});

Mongoose.model('Book', bookSchema);

module.exports = Mongoose.model('Book');