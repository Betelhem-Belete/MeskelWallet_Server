const MoneyCollection = require('../model/months')

const handle_get_all =async(req, res)=>{
    try {
        const collections = await MoneyCollection.find();
        res.status(200).json(collections);
      } catch (err) {
        res.status(500).json({ error: 'Error fetching money collections' });
      }
}
///////////////
const handle_get_one =async(req, res)=>{
  const id = req.params.id
  try {
      const collections = await MoneyCollection.findById(id);
      res.status(200).json(collections);
    } catch (err) {
      res.status(500).json({ error: 'Error fetching money collections' });
    }
}
//////////////////////
const handle_add = async (req, res) => {
  try {
    const newData = req.body;
    console.log(newData)
    const newCollection = new MoneyCollection(newData);
    await newCollection.save();
    res.status(201).json(newCollection);
  } catch (err) {
    res.status(400).json({ error: 'Error creating money collection' });
  }
};

/////////////////////
const handle_delete=async(req, res)=>{
    const { id } = req.params;

  try {
    const deletedCollection = await MoneyCollection.findByIdAndRemove(id);

    if (!deletedCollection) {
      return res.status(404).json({ error: 'Money collection not found' });
    }

    res.status(200).json(deletedCollection);
  } catch (err) {
    res.status(400).json({ error: 'Error deleting money collection' });
  }
}
///////////////////
const handle_edit = async (req, res) => {
    const { id } = req.params;
    const { name, gender,mobile,Tikmt,Hidar, Tahisas,Tir,Yekatit,Megabit,Miyaziya,Ginbot,Sene,Hamle,Nehase,Meskerm} = req.body;
    const updates = {};
  
    if (name) {
      updates.name = name;
    }
   if (gender) {
      updates.gender = gender;
    }
    if (mobile) {
      updates.mobile = mobile;
    }
    if (mobile) {
      updates.mobile = mobile;
    }if (Tikmt) {
      updates.Tikmt = Tikmt;
    }if (Hidar) {
      updates.Hidar = Hidar;
    }if (Tahisas) {
      updates.Tahisas = Tahisas;
    }if (Tir) {
      updates.Tir = Tir;
    }if (Yekatit) {
      updates.Yekatit = Yekatit;
    }if (Megabit) {
      updates.Megabit = Megabit;
    }if (Miyaziya) {
      updates.Miyaziya = Miyaziya;
    }if (Ginbot) {
      updates.Ginbot = Ginbot;
    }if (Sene) {
      updates.Sene = Sene;
    }if (Hamle) {
      updates.Hamle = Hamle;
    }if (Nehase) {
      updates.Nehase = Nehase;
    }if (Meskerm) {
      updates.Meskerm = Meskerm;
    }
   
    // if (monthlyPayments) {
    //   for (const month in monthlyPayments) {
    //     if (monthlyPayments.hasOwnProperty(month)) {
    //       updates[`monthlyPayments.${month}`] = monthlyPayments[month];
    //     }
    //   }
    // }
  
    try {
      const updatedCollection = await MoneyCollection.findByIdAndUpdate(
        id,
        updates,
        { new: true }
      );
  
      if (!updatedCollection) {
        return res.status(404).json({ error: 'Money collection not found' });
      }
  
      res.status(200).json(updatedCollection);
    } catch (err) {
      console.error(err);
      res.status(400).json({ error: 'Error updating money collection' });
    }
  };
  
  

module.exports= {
    handle_get_all,
    handle_add,
    handle_delete,
    handle_get_one,
    handle_edit
}