import mongoose from "mongoose";
const counterSchema = new mongoose.Schema({
    id :{
    type :String,
    },
    seq: {
        type:Number,
    }

  })
   export const countermodel = mongoose.model("Counter"  , counterSchema)
   export function getsequenceNextValue (seqName){
    return new Promise((resolve, reject) => {
        countermodel.findByIdAndUpdate(
            { "id": seqName },
            { "$inc": { "seq": 1 } }
            , (error, counter) => {
                if (error) {
                    reject(error);
                }
                if(counter) {
                    resolve(counter.seq + 1);
                } else {
                    resolve(null);
                }
            });
    });

   } 
   export function insertCounter(seqName){
    const newCounter = new countermodel({ _id: seqName, seq: 1 });
    return new Promise((resolve, reject) => {
    newCounter.save()
        .then(data => {
            resolve(data.seq);
        })
        .catch(error => reject(error));
    });
   }