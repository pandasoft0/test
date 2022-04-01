var fs = require("fs")

var amount = {
	Bronze: {
		public: 3490,
	},
	Silver: {
		public: 2490,
	},
	Gold: {
		public: 990,
	},
	Platinum: {
		public: 530,
	}
}

var eachMetadata= {
	Gold: {
	    "name": "Gold #0001",
	    "symbol": "MSAC",
	    "description": "Access Card for Property in the Metasuite Ecosystem",
	    "seller_fee_basis_points": 500,
	    "image": "Gold.png",
	    "attributes": [
	        {"trait_type": "Model", "value": "Gold"},
	    ],
	    "properties": {
	        "creators": [{"address": "HUUd2UCQD3CE99xKUzYhYyhZuRTfGL3qAwEFjxx6c1ZN", "share": 100}],
	        "files": [{"uri": "Gold.png", "type": "video/mp4"}],
	        "category": "video",
	    },
	    "animation_url": "Gold.mp4",
	    "collection": {"name": "NFT Access Card", "family": "MetaSuite"}
	},
	Silver: {
	    "name": "Silver #0001",
	    "symbol": "MSAC",
	    "description": "Access Card for Property in the Metasuite Ecosystem",
	    "seller_fee_basis_points": 500,
	    "image": "Silver.png",
	    "attributes": [
	        {"trait_type": "Model", "value": "Silver"},
	    ],
	    "properties": {
	        "creators": [{"address": "HUUd2UCQD3CE99xKUzYhYyhZuRTfGL3qAwEFjxx6c1ZN", "share": 100}],
	        "files": [{"uri": "Silver.png", "type": "video/mp4"}],
	        "category": "video",
	    },
	    "animation_url": "Silver.mp4",
	    "collection": {"name": "NFT Access Card", "family": "MetaSuite"}
	},
	Bronze: {
	    "name": "Bronze #0001",
	    "symbol": "MSAC",
	    "description": "Access Card for Property in the Metasuite Ecosystem",
	    "seller_fee_basis_points": 500,
	    "image": "Bronze.png",
	    "attributes": [
	        {"trait_type": "Model", "value": "Bronze"},
	    ],
	    "properties": {
	        "creators": [{"address": "HUUd2UCQD3CE99xKUzYhYyhZuRTfGL3qAwEFjxx6c1ZN", "share": 100}],
	        "files": [{"uri": "Bronze.png", "type": "video/mp4"}],
	        "category": "video",
	    },
	    "animation_url": "Bronze.mp4",
	    "collection": {"name": "NFT Access Card", "family": "MetaSuite"}
	},
	Platinum: {
	    "name": "Platinum #0001",
	    "symbol": "MSAC",
	    "description": "Access Card for Property in the Metasuite Ecosystem",
	    "seller_fee_basis_points": 500,
	    "image": "Platinum.png",
	    "attributes": [
	        {"trait_type": "Model", "value": "Platinum"},
	    ],
	    "properties": {
	        "creators": [{"address": "HUUd2UCQD3CE99xKUzYhYyhZuRTfGL3qAwEFjxx6c1ZN", "share": 100}],
	        "files": [{"uri": "Platinum.png", "type": "video/mp4"}],
	        "category": "video",
	    },
	    "animation_url": "Platinum.mp4",
	    "collection": {"name": "NFT Access Card", "family": "MetaSuite"}
	},

	Diamond: {
	    "name": "Diamond #0001",
	    "symbol": "MSAC",
	    "description": "Access Card for Property in the Metasuite Ecosystem",
	    "seller_fee_basis_points": 500,
	    "image": "Diamond.png",
	    "attributes": [
	        {"trait_type": "Model", "value": "0"},
	        {"trait_type": "Layer-2", "value": "0"}, 
	        {"trait_type": "Layer-3", "value": "0"},
	        {"trait_type": "Layer-4", "value": "1"}
	    ],
	    "properties": {
	        "creators": [{"address": "HUUd2UCQD3CE99xKUzYhYyhZuRTfGL3qAwEFjxx6c1ZN", "share": 100}],
	        "files": [{"uri": "Diamond.png", "type": "video/mp4"}],
	        "category": "video",
	    },
	    "collection": {"name": "NFT Access Card", "family": "MetaSuite"}
	},
}

var index = 0;
var metadata = eachMetadata.Gold;
for (; index < amount.Gold.public; index++) {
	metadata.name = "Gold #"+(index+1).toString().padStart(4, '0');
	fs.writeFile(index+".json", JSON.stringify(metadata), (err)=>{})
}

metadata = eachMetadata.Silver;
for (; index < amount.Gold.public + amount.Silver.public; index++) {
	metadata.name = "Silver #"+(index+1).toString().padStart(4, '0');
	metadata.properties.files[0].uri = index+".mp4"
	fs.writeFile(index+".json", JSON.stringify(metadata), (err)=>{})
}

metadata = eachMetadata.Bronze;
for (; index < amount.Gold.public + amount.Silver.public + amount.Bronze.public; index++) {
	metadata.name = "Bronze #"+(index+1).toString().padStart(4, '0');
	fs.writeFile(index+".json", JSON.stringify(metadata), (err)=>{})
}

metadata = eachMetadata.Platinum;
for (; index < amount.Gold.public + amount.Silver.public + amount.Bronze.public + amount.Platinum.public; index++) {
	metadata.name = "Platinum #"+(index+1).toString().padStart(4, '0');
	fs.writeFile(index+".json", JSON.stringify(metadata), (err)=>{})
}

