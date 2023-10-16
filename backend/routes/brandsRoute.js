import express, { request } from 'express';
import multer from 'multer';
import { Brand } from '../models/brandModel.js';

const router = express.Router();

// Set upload folder destination with name
const storage = multer.diskStorage({
	destination: function(_request, _file, callback) {
		callback(null, 'uploads/');
	},
	filename: function(_request, file, callback) {
		const uniqueSuffix = Date.now();
		callback(null, uniqueSuffix + '-' + file.originalname);
	}
});

// Set multer middleware with storage configuration
const upload = multer({ storage: storage });

// Route for POST (uploading) a brand with title and image
router.post('/', upload.single('image'), async (request, response) => {
	try {
		if (!request.body.title || !request.file) {
			return response.status(400).send({
				message: 'Send all required fields: title, image',
			});
		}
		
		// This will store brand with current date
		const currentDate = new Date();
		const imageName = request.file.filename;

		const newBrand = {
			title: request.body.title,
			publishDate: currentDate,
			image: imageName
		}

		const brand = await Brand.create(newBrand);

		return response.status(201).send(brand);
	} catch (error) {
		console.log(error.message);
		response.status(500).send({ message: error.message })
	}
});

// Route for GET All brands sorted by publishDate
router.get('/', async (_request, response) => {
  try {
		// Sort by publishDate in descending order: old to new
		const brands = await Brand.find().sort({ publishDate: 1 });

    return response.status(200).json({
			count: brands.length,
			data: brands
		});
  } catch (error) {
    console.log(error.message);
    response.status(500).send({ message: error.message });
  }
});

// Route for DELETE brand by id
router.delete('/:id', async (request, response) => {
  try {
		const { id } = request.params;
		const result = await Brand.findByIdAndDelete(id);

		if (!result) {
			return response.status(404).json({ message: 'Brand not found' });
		}

		return response.status(200).send({ message: 'Brand deleted successfully' })

  } catch (error) {
    console.log(error.message);
    response.status(500).send({ message: error.message });
  }
});

export default router;