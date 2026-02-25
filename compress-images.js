const sharp = require('sharp');
const fs = require('fs');
const path = require('path');

const imagesDir = path.join(__dirname, 'public', 'images');
const outputDir = path.join(__dirname, 'public', 'images-opt');

if (!fs.existsSync(outputDir)) {
    fs.mkdirSync(outputDir);
}

const imagesToProcess = [
    // Initial set (re-running for consistency and to ensure move)
    { name: 'homee.jpg', output: 'home-hero.webp', width: 1920 },
    { name: 'studentss.jpg', output: 'students-hospitality.webp', width: 1920 },
    { name: 'vissa.jpg', output: 'visa-success.webp', width: 1920 },
    { name: 'placement.jpg', output: 'placement-hero.webp', width: 1920 },
    { name: 'support.jpg', output: 'student-support.webp', width: 1920 },
    { name: 'teams.jpg', output: 'team-about.webp', width: 1920 },
    { name: 'home.jpg', output: 'home-bg.webp', width: 1920 },
    { name: 'admission.jpg', output: 'admission.webp', width: 1200 },
    { name: 'counseling.jpg', output: 'counseling.webp', width: 1200 },
    { name: 'europe.jpg', output: 'europe.webp', width: 1200 },
    { name: 'graduation.jpg', output: 'graduation.webp', width: 1200 },
    // Remaining set
    { name: 'missionn.jpg', output: 'mission.webp', width: 1200 },
    { name: 'globe.jpg', output: 'globe.webp', width: 1200 },
    { name: 'contact.jpg', output: 'contact-hero.webp', width: 1920 },
    { name: 'visa1.jpg', output: 'visa-milestone.webp', width: 1200 },
    { name: 'about.jpg', output: 'about-hero.webp', width: 1920 },
    { name: 'students.jpg', output: 'students-orientation.webp', width: 1200 }
];

async function compressImages() {
    for (const image of imagesToProcess) {
        const inputPath = path.join(imagesDir, image.name);
        const outputPath = path.join(outputDir, image.output);

        if (fs.existsSync(inputPath)) {
            console.log(`Processing ${image.name}...`);
            try {
                await sharp(inputPath)
                    .resize({ width: image.width, withoutEnlargement: true })
                    .webp({ quality: 80 })
                    .toFile(outputPath);
                console.log(`Saved to ${image.output}`);
            } catch (err) {
                console.error(`Error processing ${image.name}:`, err);
            }
        } else {
            console.warn(`File not found: ${image.name}`);
        }
    }
    console.log('Finished processing all images.');
}

compressImages();
