$(document).ready(init);

let labels = [];
let images = [];

function init() {
	// TODO
	//fetchProject(processProject);
	fetchLabels(fetchImages);
}

function getUrl(method) {
	return 'https://nat8qr1g2f.execute-api.eu-west-1.amazonaws.com/v1/' + method;
}

function fetchLabels(callback) {
	// TODO implement backend call to fetch labels
	labels = [
        "1. Not a dog",
        "2. Just a dog",
        "3. Kinda cute",
        "4. Very cute",
        "5. Super Cute!"
    ];
    callback();
}


function fetchImages() {
	$.ajax({
		type: 'POST',
		url: getUrl('image/list'),
		crossDomain: true,
		data: {},
		dataType: 'json',
		success: data => {
			images = data;
			if (images.length > 0) { showFirstImage();}
		},
		error: console.error
	});
}

function showFirstImage() {
	$('#images')
		.empty()
		.append(
		$('#template-image')
			.children()
			.first()
			.clone()
			.find('.card-body')
				.css('background-image', 'url(\"'+images[0].url+"\")")
				.closest('.card')
			.append(labels.map(label =>
				$('#template-label')
					.children()
					.first()
					.clone()
					.text(label)
					.click(() => clickLabel(label))
			))
	);
}

function clearImage() {
	$('#images')
		.empty();
}

function clickLabel(label) {
	console.log(`label ${label} has been clicked for image ${images[0].key}`);
	let payload = { label: label, source_key: images[0].key };
	$.ajax({
		type: 'POST',
		url: 'https://nat8qr1g2f.execute-api.eu-west-1.amazonaws.com/v1/image/label',
		crossDomain: true,
		data: JSON.stringify(payload),
		dataType: 'json',
		success: prepareNextImage,
		error: console.error
	});
}

function prepareNextImage() {
	images.shift();
	if(images.length == 0)
		fetchImages();

	if(images.length == 0){
		clearImage();
		alert('ALL OUT OF IMAGES FOR TODAY COME BACK TOMORROW!');
	}
	else {
		showFirstImage();
	}
}

