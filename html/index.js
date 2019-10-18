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
	// TODO fix backend to ignore CORS
	/*$.ajax({
		type: 'POST',
		url: getUrl('list'),
		crossDomain: true,
		xhrFields: {
			withCredentials: true
		},
		data: {},
		dataType: 'json',
		success: callback,
		error: console.error
	});*/
	images = [
  {
    "key": "unlabeled/105r60xe8ll31.jpg",
    "url": "https://source-bucket-image-labeling.s3.amazonaws.com/unlabeled/105r60xe8ll31.jpg?AWSAccessKeyId=ASIA5JI2HN2TJ6WEN7OS&Signature=0Xz%2ByQK786EtOKIoKdsGaTsoxGY%3D&x-amz-security-token=AgoJb3JpZ2luX2VjEJv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCWV1LXdlc3QtMSJGMEQCIEXBspeBxw6Axhy%2Bu36dyvkDVeh%2FSeSAokqELK5nTQXuAiBRALhOjcHBWPyUn9XzqRnKeI%2F%2F5s6YQ3LBkTsPjsfGAiqgAgiU%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDkxMzI3MjQzNDM0MiIMtyyjGn94KMtnYN0XKvQB9D7LiCfQ8Xmiza9YJ5MpiKHsr3ouFe2Hv3g9a%2FBGrQEp7Zo3sFRjRaI%2F9QtH5oYodmZGULhIxBlu3KOh4ZcwMiYSqLXOIFxJvofvwb0l%2Fxb5HRHiemu6fbD%2FTOYwz3MliwT9Fia3MPHma2yYJ0yX7Yp6meywHWII%2FG4DHsu9qoEeCmW1ctpDzTg%2BEssd1%2FhwnUoezExksWlQCLnMLnkhp%2FUU5ufINEr6%2F72o8W%2F%2BvuT6B4wDowWMzbA8pDTCs17Ce2J7MGMVSI82D7bTQxwnr5Nh5ea83bEGkb1ZOcuQG4nrkY3zZ%2BW2E%2FOfm8MfwBzMeDealTDGiajtBTq1AfI6FMwWLV6a1PNfIp9TMLux535MsHoj6%2FDSVG3JjUvbXsn%2BLIRWc34q6H4Opd4eyf8POUrv8zz69qrF8o%2FM48QC4uXwxk3HXonyv20K2lyHuYaNzaNiwInPpxmPqbr8ncNcrW8dZXPyft%2FzN%2FzpF0xfiDGx9FrGk2%2B70cnXLV7moZOXxz9wznZ%2BJWY%2FZhNOHCXB%2FyGZqkDBVeH%2FsBYeM6xZK31fZQvuOYZRk9ekaUnjXD6HujY%3D&Expires=1571430567"
  },
  {
    "key": "unlabeled/2rgtdg0055l01.jpg",
    "url": "https://source-bucket-image-labeling.s3.amazonaws.com/unlabeled/2rgtdg0055l01.jpg?AWSAccessKeyId=ASIA5JI2HN2TJ6WEN7OS&Signature=j5gF3y8bolH8eF%2BaQbSbC0vWtLU%3D&x-amz-security-token=AgoJb3JpZ2luX2VjEJv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCWV1LXdlc3QtMSJGMEQCIEXBspeBxw6Axhy%2Bu36dyvkDVeh%2FSeSAokqELK5nTQXuAiBRALhOjcHBWPyUn9XzqRnKeI%2F%2F5s6YQ3LBkTsPjsfGAiqgAgiU%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDkxMzI3MjQzNDM0MiIMtyyjGn94KMtnYN0XKvQB9D7LiCfQ8Xmiza9YJ5MpiKHsr3ouFe2Hv3g9a%2FBGrQEp7Zo3sFRjRaI%2F9QtH5oYodmZGULhIxBlu3KOh4ZcwMiYSqLXOIFxJvofvwb0l%2Fxb5HRHiemu6fbD%2FTOYwz3MliwT9Fia3MPHma2yYJ0yX7Yp6meywHWII%2FG4DHsu9qoEeCmW1ctpDzTg%2BEssd1%2FhwnUoezExksWlQCLnMLnkhp%2FUU5ufINEr6%2F72o8W%2F%2BvuT6B4wDowWMzbA8pDTCs17Ce2J7MGMVSI82D7bTQxwnr5Nh5ea83bEGkb1ZOcuQG4nrkY3zZ%2BW2E%2FOfm8MfwBzMeDealTDGiajtBTq1AfI6FMwWLV6a1PNfIp9TMLux535MsHoj6%2FDSVG3JjUvbXsn%2BLIRWc34q6H4Opd4eyf8POUrv8zz69qrF8o%2FM48QC4uXwxk3HXonyv20K2lyHuYaNzaNiwInPpxmPqbr8ncNcrW8dZXPyft%2FzN%2FzpF0xfiDGx9FrGk2%2B70cnXLV7moZOXxz9wznZ%2BJWY%2FZhNOHCXB%2FyGZqkDBVeH%2FsBYeM6xZK31fZQvuOYZRk9ekaUnjXD6HujY%3D&Expires=1571430567"
  },
  {
    "key": "unlabeled/3xp333oeeec21.jpg",
    "url": "https://source-bucket-image-labeling.s3.amazonaws.com/unlabeled/3xp333oeeec21.jpg?AWSAccessKeyId=ASIA5JI2HN2TJ6WEN7OS&Signature=VjSI5X58w9g2hwh4nMnTXAM8V2o%3D&x-amz-security-token=AgoJb3JpZ2luX2VjEJv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCWV1LXdlc3QtMSJGMEQCIEXBspeBxw6Axhy%2Bu36dyvkDVeh%2FSeSAokqELK5nTQXuAiBRALhOjcHBWPyUn9XzqRnKeI%2F%2F5s6YQ3LBkTsPjsfGAiqgAgiU%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDkxMzI3MjQzNDM0MiIMtyyjGn94KMtnYN0XKvQB9D7LiCfQ8Xmiza9YJ5MpiKHsr3ouFe2Hv3g9a%2FBGrQEp7Zo3sFRjRaI%2F9QtH5oYodmZGULhIxBlu3KOh4ZcwMiYSqLXOIFxJvofvwb0l%2Fxb5HRHiemu6fbD%2FTOYwz3MliwT9Fia3MPHma2yYJ0yX7Yp6meywHWII%2FG4DHsu9qoEeCmW1ctpDzTg%2BEssd1%2FhwnUoezExksWlQCLnMLnkhp%2FUU5ufINEr6%2F72o8W%2F%2BvuT6B4wDowWMzbA8pDTCs17Ce2J7MGMVSI82D7bTQxwnr5Nh5ea83bEGkb1ZOcuQG4nrkY3zZ%2BW2E%2FOfm8MfwBzMeDealTDGiajtBTq1AfI6FMwWLV6a1PNfIp9TMLux535MsHoj6%2FDSVG3JjUvbXsn%2BLIRWc34q6H4Opd4eyf8POUrv8zz69qrF8o%2FM48QC4uXwxk3HXonyv20K2lyHuYaNzaNiwInPpxmPqbr8ncNcrW8dZXPyft%2FzN%2FzpF0xfiDGx9FrGk2%2B70cnXLV7moZOXxz9wznZ%2BJWY%2FZhNOHCXB%2FyGZqkDBVeH%2FsBYeM6xZK31fZQvuOYZRk9ekaUnjXD6HujY%3D&Expires=1571430567"
  },
  {
    "key": "unlabeled/56mbgipzzp531.jpg",
    "url": "https://source-bucket-image-labeling.s3.amazonaws.com/unlabeled/56mbgipzzp531.jpg?AWSAccessKeyId=ASIA5JI2HN2TJ6WEN7OS&Signature=1wKKEnX8UA1zsUi4dGQUtEEtLSI%3D&x-amz-security-token=AgoJb3JpZ2luX2VjEJv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCWV1LXdlc3QtMSJGMEQCIEXBspeBxw6Axhy%2Bu36dyvkDVeh%2FSeSAokqELK5nTQXuAiBRALhOjcHBWPyUn9XzqRnKeI%2F%2F5s6YQ3LBkTsPjsfGAiqgAgiU%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDkxMzI3MjQzNDM0MiIMtyyjGn94KMtnYN0XKvQB9D7LiCfQ8Xmiza9YJ5MpiKHsr3ouFe2Hv3g9a%2FBGrQEp7Zo3sFRjRaI%2F9QtH5oYodmZGULhIxBlu3KOh4ZcwMiYSqLXOIFxJvofvwb0l%2Fxb5HRHiemu6fbD%2FTOYwz3MliwT9Fia3MPHma2yYJ0yX7Yp6meywHWII%2FG4DHsu9qoEeCmW1ctpDzTg%2BEssd1%2FhwnUoezExksWlQCLnMLnkhp%2FUU5ufINEr6%2F72o8W%2F%2BvuT6B4wDowWMzbA8pDTCs17Ce2J7MGMVSI82D7bTQxwnr5Nh5ea83bEGkb1ZOcuQG4nrkY3zZ%2BW2E%2FOfm8MfwBzMeDealTDGiajtBTq1AfI6FMwWLV6a1PNfIp9TMLux535MsHoj6%2FDSVG3JjUvbXsn%2BLIRWc34q6H4Opd4eyf8POUrv8zz69qrF8o%2FM48QC4uXwxk3HXonyv20K2lyHuYaNzaNiwInPpxmPqbr8ncNcrW8dZXPyft%2FzN%2FzpF0xfiDGx9FrGk2%2B70cnXLV7moZOXxz9wznZ%2BJWY%2FZhNOHCXB%2FyGZqkDBVeH%2FsBYeM6xZK31fZQvuOYZRk9ekaUnjXD6HujY%3D&Expires=1571430567"
  },
  {
    "key": "unlabeled/5ezpixc8jmi31.jpg",
    "url": "https://source-bucket-image-labeling.s3.amazonaws.com/unlabeled/5ezpixc8jmi31.jpg?AWSAccessKeyId=ASIA5JI2HN2TJ6WEN7OS&Signature=GLijH6NdveBUDYL%2BmUrVUBldGmM%3D&x-amz-security-token=AgoJb3JpZ2luX2VjEJv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCWV1LXdlc3QtMSJGMEQCIEXBspeBxw6Axhy%2Bu36dyvkDVeh%2FSeSAokqELK5nTQXuAiBRALhOjcHBWPyUn9XzqRnKeI%2F%2F5s6YQ3LBkTsPjsfGAiqgAgiU%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDkxMzI3MjQzNDM0MiIMtyyjGn94KMtnYN0XKvQB9D7LiCfQ8Xmiza9YJ5MpiKHsr3ouFe2Hv3g9a%2FBGrQEp7Zo3sFRjRaI%2F9QtH5oYodmZGULhIxBlu3KOh4ZcwMiYSqLXOIFxJvofvwb0l%2Fxb5HRHiemu6fbD%2FTOYwz3MliwT9Fia3MPHma2yYJ0yX7Yp6meywHWII%2FG4DHsu9qoEeCmW1ctpDzTg%2BEssd1%2FhwnUoezExksWlQCLnMLnkhp%2FUU5ufINEr6%2F72o8W%2F%2BvuT6B4wDowWMzbA8pDTCs17Ce2J7MGMVSI82D7bTQxwnr5Nh5ea83bEGkb1ZOcuQG4nrkY3zZ%2BW2E%2FOfm8MfwBzMeDealTDGiajtBTq1AfI6FMwWLV6a1PNfIp9TMLux535MsHoj6%2FDSVG3JjUvbXsn%2BLIRWc34q6H4Opd4eyf8POUrv8zz69qrF8o%2FM48QC4uXwxk3HXonyv20K2lyHuYaNzaNiwInPpxmPqbr8ncNcrW8dZXPyft%2FzN%2FzpF0xfiDGx9FrGk2%2B70cnXLV7moZOXxz9wznZ%2BJWY%2FZhNOHCXB%2FyGZqkDBVeH%2FsBYeM6xZK31fZQvuOYZRk9ekaUnjXD6HujY%3D&Expires=1571430567"
  },
  {
    "key": "unlabeled/6azy3rjaopv01.jpg",
    "url": "https://source-bucket-image-labeling.s3.amazonaws.com/unlabeled/6azy3rjaopv01.jpg?AWSAccessKeyId=ASIA5JI2HN2TJ6WEN7OS&Signature=j3D%2Bzaii233lucn0dPf2FRy675M%3D&x-amz-security-token=AgoJb3JpZ2luX2VjEJv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCWV1LXdlc3QtMSJGMEQCIEXBspeBxw6Axhy%2Bu36dyvkDVeh%2FSeSAokqELK5nTQXuAiBRALhOjcHBWPyUn9XzqRnKeI%2F%2F5s6YQ3LBkTsPjsfGAiqgAgiU%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDkxMzI3MjQzNDM0MiIMtyyjGn94KMtnYN0XKvQB9D7LiCfQ8Xmiza9YJ5MpiKHsr3ouFe2Hv3g9a%2FBGrQEp7Zo3sFRjRaI%2F9QtH5oYodmZGULhIxBlu3KOh4ZcwMiYSqLXOIFxJvofvwb0l%2Fxb5HRHiemu6fbD%2FTOYwz3MliwT9Fia3MPHma2yYJ0yX7Yp6meywHWII%2FG4DHsu9qoEeCmW1ctpDzTg%2BEssd1%2FhwnUoezExksWlQCLnMLnkhp%2FUU5ufINEr6%2F72o8W%2F%2BvuT6B4wDowWMzbA8pDTCs17Ce2J7MGMVSI82D7bTQxwnr5Nh5ea83bEGkb1ZOcuQG4nrkY3zZ%2BW2E%2FOfm8MfwBzMeDealTDGiajtBTq1AfI6FMwWLV6a1PNfIp9TMLux535MsHoj6%2FDSVG3JjUvbXsn%2BLIRWc34q6H4Opd4eyf8POUrv8zz69qrF8o%2FM48QC4uXwxk3HXonyv20K2lyHuYaNzaNiwInPpxmPqbr8ncNcrW8dZXPyft%2FzN%2FzpF0xfiDGx9FrGk2%2B70cnXLV7moZOXxz9wznZ%2BJWY%2FZhNOHCXB%2FyGZqkDBVeH%2FsBYeM6xZK31fZQvuOYZRk9ekaUnjXD6HujY%3D&Expires=1571430567"
  },
  {
    "key": "unlabeled/74uedq17lh531.jpg",
    "url": "https://source-bucket-image-labeling.s3.amazonaws.com/unlabeled/74uedq17lh531.jpg?AWSAccessKeyId=ASIA5JI2HN2TJ6WEN7OS&Signature=pnqzMWXNgwSNPOJ7HRLONTHLAvw%3D&x-amz-security-token=AgoJb3JpZ2luX2VjEJv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCWV1LXdlc3QtMSJGMEQCIEXBspeBxw6Axhy%2Bu36dyvkDVeh%2FSeSAokqELK5nTQXuAiBRALhOjcHBWPyUn9XzqRnKeI%2F%2F5s6YQ3LBkTsPjsfGAiqgAgiU%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDkxMzI3MjQzNDM0MiIMtyyjGn94KMtnYN0XKvQB9D7LiCfQ8Xmiza9YJ5MpiKHsr3ouFe2Hv3g9a%2FBGrQEp7Zo3sFRjRaI%2F9QtH5oYodmZGULhIxBlu3KOh4ZcwMiYSqLXOIFxJvofvwb0l%2Fxb5HRHiemu6fbD%2FTOYwz3MliwT9Fia3MPHma2yYJ0yX7Yp6meywHWII%2FG4DHsu9qoEeCmW1ctpDzTg%2BEssd1%2FhwnUoezExksWlQCLnMLnkhp%2FUU5ufINEr6%2F72o8W%2F%2BvuT6B4wDowWMzbA8pDTCs17Ce2J7MGMVSI82D7bTQxwnr5Nh5ea83bEGkb1ZOcuQG4nrkY3zZ%2BW2E%2FOfm8MfwBzMeDealTDGiajtBTq1AfI6FMwWLV6a1PNfIp9TMLux535MsHoj6%2FDSVG3JjUvbXsn%2BLIRWc34q6H4Opd4eyf8POUrv8zz69qrF8o%2FM48QC4uXwxk3HXonyv20K2lyHuYaNzaNiwInPpxmPqbr8ncNcrW8dZXPyft%2FzN%2FzpF0xfiDGx9FrGk2%2B70cnXLV7moZOXxz9wznZ%2BJWY%2FZhNOHCXB%2FyGZqkDBVeH%2FsBYeM6xZK31fZQvuOYZRk9ekaUnjXD6HujY%3D&Expires=1571430567"
  },
  {
    "key": "unlabeled/955onXI.jpg",
    "url": "https://source-bucket-image-labeling.s3.amazonaws.com/unlabeled/955onXI.jpg?AWSAccessKeyId=ASIA5JI2HN2TJ6WEN7OS&Signature=M3h83PsK3%2BaC6VQjsu47HyqprFU%3D&x-amz-security-token=AgoJb3JpZ2luX2VjEJv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCWV1LXdlc3QtMSJGMEQCIEXBspeBxw6Axhy%2Bu36dyvkDVeh%2FSeSAokqELK5nTQXuAiBRALhOjcHBWPyUn9XzqRnKeI%2F%2F5s6YQ3LBkTsPjsfGAiqgAgiU%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDkxMzI3MjQzNDM0MiIMtyyjGn94KMtnYN0XKvQB9D7LiCfQ8Xmiza9YJ5MpiKHsr3ouFe2Hv3g9a%2FBGrQEp7Zo3sFRjRaI%2F9QtH5oYodmZGULhIxBlu3KOh4ZcwMiYSqLXOIFxJvofvwb0l%2Fxb5HRHiemu6fbD%2FTOYwz3MliwT9Fia3MPHma2yYJ0yX7Yp6meywHWII%2FG4DHsu9qoEeCmW1ctpDzTg%2BEssd1%2FhwnUoezExksWlQCLnMLnkhp%2FUU5ufINEr6%2F72o8W%2F%2BvuT6B4wDowWMzbA8pDTCs17Ce2J7MGMVSI82D7bTQxwnr5Nh5ea83bEGkb1ZOcuQG4nrkY3zZ%2BW2E%2FOfm8MfwBzMeDealTDGiajtBTq1AfI6FMwWLV6a1PNfIp9TMLux535MsHoj6%2FDSVG3JjUvbXsn%2BLIRWc34q6H4Opd4eyf8POUrv8zz69qrF8o%2FM48QC4uXwxk3HXonyv20K2lyHuYaNzaNiwInPpxmPqbr8ncNcrW8dZXPyft%2FzN%2FzpF0xfiDGx9FrGk2%2B70cnXLV7moZOXxz9wznZ%2BJWY%2FZhNOHCXB%2FyGZqkDBVeH%2FsBYeM6xZK31fZQvuOYZRk9ekaUnjXD6HujY%3D&Expires=1571430567"
  },
  {
    "key": "unlabeled/a502br441s721.jpg",
    "url": "https://source-bucket-image-labeling.s3.amazonaws.com/unlabeled/a502br441s721.jpg?AWSAccessKeyId=ASIA5JI2HN2TJ6WEN7OS&Signature=WyZsprce2aIKKE5evSeXFInVMC0%3D&x-amz-security-token=AgoJb3JpZ2luX2VjEJv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCWV1LXdlc3QtMSJGMEQCIEXBspeBxw6Axhy%2Bu36dyvkDVeh%2FSeSAokqELK5nTQXuAiBRALhOjcHBWPyUn9XzqRnKeI%2F%2F5s6YQ3LBkTsPjsfGAiqgAgiU%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDkxMzI3MjQzNDM0MiIMtyyjGn94KMtnYN0XKvQB9D7LiCfQ8Xmiza9YJ5MpiKHsr3ouFe2Hv3g9a%2FBGrQEp7Zo3sFRjRaI%2F9QtH5oYodmZGULhIxBlu3KOh4ZcwMiYSqLXOIFxJvofvwb0l%2Fxb5HRHiemu6fbD%2FTOYwz3MliwT9Fia3MPHma2yYJ0yX7Yp6meywHWII%2FG4DHsu9qoEeCmW1ctpDzTg%2BEssd1%2FhwnUoezExksWlQCLnMLnkhp%2FUU5ufINEr6%2F72o8W%2F%2BvuT6B4wDowWMzbA8pDTCs17Ce2J7MGMVSI82D7bTQxwnr5Nh5ea83bEGkb1ZOcuQG4nrkY3zZ%2BW2E%2FOfm8MfwBzMeDealTDGiajtBTq1AfI6FMwWLV6a1PNfIp9TMLux535MsHoj6%2FDSVG3JjUvbXsn%2BLIRWc34q6H4Opd4eyf8POUrv8zz69qrF8o%2FM48QC4uXwxk3HXonyv20K2lyHuYaNzaNiwInPpxmPqbr8ncNcrW8dZXPyft%2FzN%2FzpF0xfiDGx9FrGk2%2B70cnXLV7moZOXxz9wznZ%2BJWY%2FZhNOHCXB%2FyGZqkDBVeH%2FsBYeM6xZK31fZQvuOYZRk9ekaUnjXD6HujY%3D&Expires=1571430567"
  },
  {
    "key": "unlabeled/aneCtPJ.jpg",
    "url": "https://source-bucket-image-labeling.s3.amazonaws.com/unlabeled/aneCtPJ.jpg?AWSAccessKeyId=ASIA5JI2HN2TJ6WEN7OS&Signature=UyzAOgS4U75n3wWbFyOqaF%2F%2Fqdo%3D&x-amz-security-token=AgoJb3JpZ2luX2VjEJv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCWV1LXdlc3QtMSJGMEQCIEXBspeBxw6Axhy%2Bu36dyvkDVeh%2FSeSAokqELK5nTQXuAiBRALhOjcHBWPyUn9XzqRnKeI%2F%2F5s6YQ3LBkTsPjsfGAiqgAgiU%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDkxMzI3MjQzNDM0MiIMtyyjGn94KMtnYN0XKvQB9D7LiCfQ8Xmiza9YJ5MpiKHsr3ouFe2Hv3g9a%2FBGrQEp7Zo3sFRjRaI%2F9QtH5oYodmZGULhIxBlu3KOh4ZcwMiYSqLXOIFxJvofvwb0l%2Fxb5HRHiemu6fbD%2FTOYwz3MliwT9Fia3MPHma2yYJ0yX7Yp6meywHWII%2FG4DHsu9qoEeCmW1ctpDzTg%2BEssd1%2FhwnUoezExksWlQCLnMLnkhp%2FUU5ufINEr6%2F72o8W%2F%2BvuT6B4wDowWMzbA8pDTCs17Ce2J7MGMVSI82D7bTQxwnr5Nh5ea83bEGkb1ZOcuQG4nrkY3zZ%2BW2E%2FOfm8MfwBzMeDealTDGiajtBTq1AfI6FMwWLV6a1PNfIp9TMLux535MsHoj6%2FDSVG3JjUvbXsn%2BLIRWc34q6H4Opd4eyf8POUrv8zz69qrF8o%2FM48QC4uXwxk3HXonyv20K2lyHuYaNzaNiwInPpxmPqbr8ncNcrW8dZXPyft%2FzN%2FzpF0xfiDGx9FrGk2%2B70cnXLV7moZOXxz9wznZ%2BJWY%2FZhNOHCXB%2FyGZqkDBVeH%2FsBYeM6xZK31fZQvuOYZRk9ekaUnjXD6HujY%3D&Expires=1571430567"
  },
  {
    "key": "unlabeled/cewua76071u21.png",
    "url": "https://source-bucket-image-labeling.s3.amazonaws.com/unlabeled/cewua76071u21.png?AWSAccessKeyId=ASIA5JI2HN2TJ6WEN7OS&Signature=RmFxeWGYk8YnjiBhiYth5afaUYw%3D&x-amz-security-token=AgoJb3JpZ2luX2VjEJv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCWV1LXdlc3QtMSJGMEQCIEXBspeBxw6Axhy%2Bu36dyvkDVeh%2FSeSAokqELK5nTQXuAiBRALhOjcHBWPyUn9XzqRnKeI%2F%2F5s6YQ3LBkTsPjsfGAiqgAgiU%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDkxMzI3MjQzNDM0MiIMtyyjGn94KMtnYN0XKvQB9D7LiCfQ8Xmiza9YJ5MpiKHsr3ouFe2Hv3g9a%2FBGrQEp7Zo3sFRjRaI%2F9QtH5oYodmZGULhIxBlu3KOh4ZcwMiYSqLXOIFxJvofvwb0l%2Fxb5HRHiemu6fbD%2FTOYwz3MliwT9Fia3MPHma2yYJ0yX7Yp6meywHWII%2FG4DHsu9qoEeCmW1ctpDzTg%2BEssd1%2FhwnUoezExksWlQCLnMLnkhp%2FUU5ufINEr6%2F72o8W%2F%2BvuT6B4wDowWMzbA8pDTCs17Ce2J7MGMVSI82D7bTQxwnr5Nh5ea83bEGkb1ZOcuQG4nrkY3zZ%2BW2E%2FOfm8MfwBzMeDealTDGiajtBTq1AfI6FMwWLV6a1PNfIp9TMLux535MsHoj6%2FDSVG3JjUvbXsn%2BLIRWc34q6H4Opd4eyf8POUrv8zz69qrF8o%2FM48QC4uXwxk3HXonyv20K2lyHuYaNzaNiwInPpxmPqbr8ncNcrW8dZXPyft%2FzN%2FzpF0xfiDGx9FrGk2%2B70cnXLV7moZOXxz9wznZ%2BJWY%2FZhNOHCXB%2FyGZqkDBVeH%2FsBYeM6xZK31fZQvuOYZRk9ekaUnjXD6HujY%3D&Expires=1571430567"
  },
  {
    "key": "unlabeled/ck2b9wbw31d21.jpg",
    "url": "https://source-bucket-image-labeling.s3.amazonaws.com/unlabeled/ck2b9wbw31d21.jpg?AWSAccessKeyId=ASIA5JI2HN2TJ6WEN7OS&Signature=hrUDsQEervJw%2BcfZVjKZ1WW142o%3D&x-amz-security-token=AgoJb3JpZ2luX2VjEJv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCWV1LXdlc3QtMSJGMEQCIEXBspeBxw6Axhy%2Bu36dyvkDVeh%2FSeSAokqELK5nTQXuAiBRALhOjcHBWPyUn9XzqRnKeI%2F%2F5s6YQ3LBkTsPjsfGAiqgAgiU%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDkxMzI3MjQzNDM0MiIMtyyjGn94KMtnYN0XKvQB9D7LiCfQ8Xmiza9YJ5MpiKHsr3ouFe2Hv3g9a%2FBGrQEp7Zo3sFRjRaI%2F9QtH5oYodmZGULhIxBlu3KOh4ZcwMiYSqLXOIFxJvofvwb0l%2Fxb5HRHiemu6fbD%2FTOYwz3MliwT9Fia3MPHma2yYJ0yX7Yp6meywHWII%2FG4DHsu9qoEeCmW1ctpDzTg%2BEssd1%2FhwnUoezExksWlQCLnMLnkhp%2FUU5ufINEr6%2F72o8W%2F%2BvuT6B4wDowWMzbA8pDTCs17Ce2J7MGMVSI82D7bTQxwnr5Nh5ea83bEGkb1ZOcuQG4nrkY3zZ%2BW2E%2FOfm8MfwBzMeDealTDGiajtBTq1AfI6FMwWLV6a1PNfIp9TMLux535MsHoj6%2FDSVG3JjUvbXsn%2BLIRWc34q6H4Opd4eyf8POUrv8zz69qrF8o%2FM48QC4uXwxk3HXonyv20K2lyHuYaNzaNiwInPpxmPqbr8ncNcrW8dZXPyft%2FzN%2FzpF0xfiDGx9FrGk2%2B70cnXLV7moZOXxz9wznZ%2BJWY%2FZhNOHCXB%2FyGZqkDBVeH%2FsBYeM6xZK31fZQvuOYZRk9ekaUnjXD6HujY%3D&Expires=1571430567"
  },
  {
    "key": "unlabeled/fxqfz6w62v821.jpg",
    "url": "https://source-bucket-image-labeling.s3.amazonaws.com/unlabeled/fxqfz6w62v821.jpg?AWSAccessKeyId=ASIA5JI2HN2TJ6WEN7OS&Signature=chDzD1is9j%2FNycnSWXlEZar4S4o%3D&x-amz-security-token=AgoJb3JpZ2luX2VjEJv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCWV1LXdlc3QtMSJGMEQCIEXBspeBxw6Axhy%2Bu36dyvkDVeh%2FSeSAokqELK5nTQXuAiBRALhOjcHBWPyUn9XzqRnKeI%2F%2F5s6YQ3LBkTsPjsfGAiqgAgiU%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDkxMzI3MjQzNDM0MiIMtyyjGn94KMtnYN0XKvQB9D7LiCfQ8Xmiza9YJ5MpiKHsr3ouFe2Hv3g9a%2FBGrQEp7Zo3sFRjRaI%2F9QtH5oYodmZGULhIxBlu3KOh4ZcwMiYSqLXOIFxJvofvwb0l%2Fxb5HRHiemu6fbD%2FTOYwz3MliwT9Fia3MPHma2yYJ0yX7Yp6meywHWII%2FG4DHsu9qoEeCmW1ctpDzTg%2BEssd1%2FhwnUoezExksWlQCLnMLnkhp%2FUU5ufINEr6%2F72o8W%2F%2BvuT6B4wDowWMzbA8pDTCs17Ce2J7MGMVSI82D7bTQxwnr5Nh5ea83bEGkb1ZOcuQG4nrkY3zZ%2BW2E%2FOfm8MfwBzMeDealTDGiajtBTq1AfI6FMwWLV6a1PNfIp9TMLux535MsHoj6%2FDSVG3JjUvbXsn%2BLIRWc34q6H4Opd4eyf8POUrv8zz69qrF8o%2FM48QC4uXwxk3HXonyv20K2lyHuYaNzaNiwInPpxmPqbr8ncNcrW8dZXPyft%2FzN%2FzpF0xfiDGx9FrGk2%2B70cnXLV7moZOXxz9wznZ%2BJWY%2FZhNOHCXB%2FyGZqkDBVeH%2FsBYeM6xZK31fZQvuOYZRk9ekaUnjXD6HujY%3D&Expires=1571430567"
  },
  {
    "key": "unlabeled/landscape-1500925839-golden-retriever-puppy.jpg",
    "url": "https://source-bucket-image-labeling.s3.amazonaws.com/unlabeled/landscape-1500925839-golden-retriever-puppy.jpg?AWSAccessKeyId=ASIA5JI2HN2TJ6WEN7OS&Signature=3oe894U%2BNCmJW2u0NQHW6uAARfE%3D&x-amz-security-token=AgoJb3JpZ2luX2VjEJv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCWV1LXdlc3QtMSJGMEQCIEXBspeBxw6Axhy%2Bu36dyvkDVeh%2FSeSAokqELK5nTQXuAiBRALhOjcHBWPyUn9XzqRnKeI%2F%2F5s6YQ3LBkTsPjsfGAiqgAgiU%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDkxMzI3MjQzNDM0MiIMtyyjGn94KMtnYN0XKvQB9D7LiCfQ8Xmiza9YJ5MpiKHsr3ouFe2Hv3g9a%2FBGrQEp7Zo3sFRjRaI%2F9QtH5oYodmZGULhIxBlu3KOh4ZcwMiYSqLXOIFxJvofvwb0l%2Fxb5HRHiemu6fbD%2FTOYwz3MliwT9Fia3MPHma2yYJ0yX7Yp6meywHWII%2FG4DHsu9qoEeCmW1ctpDzTg%2BEssd1%2FhwnUoezExksWlQCLnMLnkhp%2FUU5ufINEr6%2F72o8W%2F%2BvuT6B4wDowWMzbA8pDTCs17Ce2J7MGMVSI82D7bTQxwnr5Nh5ea83bEGkb1ZOcuQG4nrkY3zZ%2BW2E%2FOfm8MfwBzMeDealTDGiajtBTq1AfI6FMwWLV6a1PNfIp9TMLux535MsHoj6%2FDSVG3JjUvbXsn%2BLIRWc34q6H4Opd4eyf8POUrv8zz69qrF8o%2FM48QC4uXwxk3HXonyv20K2lyHuYaNzaNiwInPpxmPqbr8ncNcrW8dZXPyft%2FzN%2FzpF0xfiDGx9FrGk2%2B70cnXLV7moZOXxz9wznZ%2BJWY%2FZhNOHCXB%2FyGZqkDBVeH%2FsBYeM6xZK31fZQvuOYZRk9ekaUnjXD6HujY%3D&Expires=1571430567"
  },
  {
    "key": "unlabeled/m6ebl2cci7221.jpg",
    "url": "https://source-bucket-image-labeling.s3.amazonaws.com/unlabeled/m6ebl2cci7221.jpg?AWSAccessKeyId=ASIA5JI2HN2TJ6WEN7OS&Signature=WBd9kDhJaTKztbtGOUcdczBTo%2FA%3D&x-amz-security-token=AgoJb3JpZ2luX2VjEJv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCWV1LXdlc3QtMSJGMEQCIEXBspeBxw6Axhy%2Bu36dyvkDVeh%2FSeSAokqELK5nTQXuAiBRALhOjcHBWPyUn9XzqRnKeI%2F%2F5s6YQ3LBkTsPjsfGAiqgAgiU%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDkxMzI3MjQzNDM0MiIMtyyjGn94KMtnYN0XKvQB9D7LiCfQ8Xmiza9YJ5MpiKHsr3ouFe2Hv3g9a%2FBGrQEp7Zo3sFRjRaI%2F9QtH5oYodmZGULhIxBlu3KOh4ZcwMiYSqLXOIFxJvofvwb0l%2Fxb5HRHiemu6fbD%2FTOYwz3MliwT9Fia3MPHma2yYJ0yX7Yp6meywHWII%2FG4DHsu9qoEeCmW1ctpDzTg%2BEssd1%2FhwnUoezExksWlQCLnMLnkhp%2FUU5ufINEr6%2F72o8W%2F%2BvuT6B4wDowWMzbA8pDTCs17Ce2J7MGMVSI82D7bTQxwnr5Nh5ea83bEGkb1ZOcuQG4nrkY3zZ%2BW2E%2FOfm8MfwBzMeDealTDGiajtBTq1AfI6FMwWLV6a1PNfIp9TMLux535MsHoj6%2FDSVG3JjUvbXsn%2BLIRWc34q6H4Opd4eyf8POUrv8zz69qrF8o%2FM48QC4uXwxk3HXonyv20K2lyHuYaNzaNiwInPpxmPqbr8ncNcrW8dZXPyft%2FzN%2FzpF0xfiDGx9FrGk2%2B70cnXLV7moZOXxz9wznZ%2BJWY%2FZhNOHCXB%2FyGZqkDBVeH%2FsBYeM6xZK31fZQvuOYZRk9ekaUnjXD6HujY%3D&Expires=1571430567"
  },
  {
    "key": "unlabeled/piq2xx1k2vu21.jpg",
    "url": "https://source-bucket-image-labeling.s3.amazonaws.com/unlabeled/piq2xx1k2vu21.jpg?AWSAccessKeyId=ASIA5JI2HN2TJ6WEN7OS&Signature=EUH02GDP43ikldfTU8yOJNbuYdI%3D&x-amz-security-token=AgoJb3JpZ2luX2VjEJv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCWV1LXdlc3QtMSJGMEQCIEXBspeBxw6Axhy%2Bu36dyvkDVeh%2FSeSAokqELK5nTQXuAiBRALhOjcHBWPyUn9XzqRnKeI%2F%2F5s6YQ3LBkTsPjsfGAiqgAgiU%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDkxMzI3MjQzNDM0MiIMtyyjGn94KMtnYN0XKvQB9D7LiCfQ8Xmiza9YJ5MpiKHsr3ouFe2Hv3g9a%2FBGrQEp7Zo3sFRjRaI%2F9QtH5oYodmZGULhIxBlu3KOh4ZcwMiYSqLXOIFxJvofvwb0l%2Fxb5HRHiemu6fbD%2FTOYwz3MliwT9Fia3MPHma2yYJ0yX7Yp6meywHWII%2FG4DHsu9qoEeCmW1ctpDzTg%2BEssd1%2FhwnUoezExksWlQCLnMLnkhp%2FUU5ufINEr6%2F72o8W%2F%2BvuT6B4wDowWMzbA8pDTCs17Ce2J7MGMVSI82D7bTQxwnr5Nh5ea83bEGkb1ZOcuQG4nrkY3zZ%2BW2E%2FOfm8MfwBzMeDealTDGiajtBTq1AfI6FMwWLV6a1PNfIp9TMLux535MsHoj6%2FDSVG3JjUvbXsn%2BLIRWc34q6H4Opd4eyf8POUrv8zz69qrF8o%2FM48QC4uXwxk3HXonyv20K2lyHuYaNzaNiwInPpxmPqbr8ncNcrW8dZXPyft%2FzN%2FzpF0xfiDGx9FrGk2%2B70cnXLV7moZOXxz9wznZ%2BJWY%2FZhNOHCXB%2FyGZqkDBVeH%2FsBYeM6xZK31fZQvuOYZRk9ekaUnjXD6HujY%3D&Expires=1571430567"
  },
  {
    "key": "unlabeled/u94pgtg7mit01.jpg",
    "url": "https://source-bucket-image-labeling.s3.amazonaws.com/unlabeled/u94pgtg7mit01.jpg?AWSAccessKeyId=ASIA5JI2HN2TJ6WEN7OS&Signature=PjD%2BnoHH065x49FBsxW6TMR%2FGE4%3D&x-amz-security-token=AgoJb3JpZ2luX2VjEJv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCWV1LXdlc3QtMSJGMEQCIEXBspeBxw6Axhy%2Bu36dyvkDVeh%2FSeSAokqELK5nTQXuAiBRALhOjcHBWPyUn9XzqRnKeI%2F%2F5s6YQ3LBkTsPjsfGAiqgAgiU%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDkxMzI3MjQzNDM0MiIMtyyjGn94KMtnYN0XKvQB9D7LiCfQ8Xmiza9YJ5MpiKHsr3ouFe2Hv3g9a%2FBGrQEp7Zo3sFRjRaI%2F9QtH5oYodmZGULhIxBlu3KOh4ZcwMiYSqLXOIFxJvofvwb0l%2Fxb5HRHiemu6fbD%2FTOYwz3MliwT9Fia3MPHma2yYJ0yX7Yp6meywHWII%2FG4DHsu9qoEeCmW1ctpDzTg%2BEssd1%2FhwnUoezExksWlQCLnMLnkhp%2FUU5ufINEr6%2F72o8W%2F%2BvuT6B4wDowWMzbA8pDTCs17Ce2J7MGMVSI82D7bTQxwnr5Nh5ea83bEGkb1ZOcuQG4nrkY3zZ%2BW2E%2FOfm8MfwBzMeDealTDGiajtBTq1AfI6FMwWLV6a1PNfIp9TMLux535MsHoj6%2FDSVG3JjUvbXsn%2BLIRWc34q6H4Opd4eyf8POUrv8zz69qrF8o%2FM48QC4uXwxk3HXonyv20K2lyHuYaNzaNiwInPpxmPqbr8ncNcrW8dZXPyft%2FzN%2FzpF0xfiDGx9FrGk2%2B70cnXLV7moZOXxz9wznZ%2BJWY%2FZhNOHCXB%2FyGZqkDBVeH%2FsBYeM6xZK31fZQvuOYZRk9ekaUnjXD6HujY%3D&Expires=1571430567"
  },
  {
    "key": "unlabeled/vx8179ow96431.jpg",
    "url": "https://source-bucket-image-labeling.s3.amazonaws.com/unlabeled/vx8179ow96431.jpg?AWSAccessKeyId=ASIA5JI2HN2TJ6WEN7OS&Signature=WOwsVmYcwUxIO3iVZohhDeu93Xo%3D&x-amz-security-token=AgoJb3JpZ2luX2VjEJv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCWV1LXdlc3QtMSJGMEQCIEXBspeBxw6Axhy%2Bu36dyvkDVeh%2FSeSAokqELK5nTQXuAiBRALhOjcHBWPyUn9XzqRnKeI%2F%2F5s6YQ3LBkTsPjsfGAiqgAgiU%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDkxMzI3MjQzNDM0MiIMtyyjGn94KMtnYN0XKvQB9D7LiCfQ8Xmiza9YJ5MpiKHsr3ouFe2Hv3g9a%2FBGrQEp7Zo3sFRjRaI%2F9QtH5oYodmZGULhIxBlu3KOh4ZcwMiYSqLXOIFxJvofvwb0l%2Fxb5HRHiemu6fbD%2FTOYwz3MliwT9Fia3MPHma2yYJ0yX7Yp6meywHWII%2FG4DHsu9qoEeCmW1ctpDzTg%2BEssd1%2FhwnUoezExksWlQCLnMLnkhp%2FUU5ufINEr6%2F72o8W%2F%2BvuT6B4wDowWMzbA8pDTCs17Ce2J7MGMVSI82D7bTQxwnr5Nh5ea83bEGkb1ZOcuQG4nrkY3zZ%2BW2E%2FOfm8MfwBzMeDealTDGiajtBTq1AfI6FMwWLV6a1PNfIp9TMLux535MsHoj6%2FDSVG3JjUvbXsn%2BLIRWc34q6H4Opd4eyf8POUrv8zz69qrF8o%2FM48QC4uXwxk3HXonyv20K2lyHuYaNzaNiwInPpxmPqbr8ncNcrW8dZXPyft%2FzN%2FzpF0xfiDGx9FrGk2%2B70cnXLV7moZOXxz9wznZ%2BJWY%2FZhNOHCXB%2FyGZqkDBVeH%2FsBYeM6xZK31fZQvuOYZRk9ekaUnjXD6HujY%3D&Expires=1571430567"
  },
  {
    "key": "unlabeled/z4ot1rwjl8v21.jpg",
    "url": "https://source-bucket-image-labeling.s3.amazonaws.com/unlabeled/z4ot1rwjl8v21.jpg?AWSAccessKeyId=ASIA5JI2HN2TJ6WEN7OS&Signature=b%2BhSNIIsHNTi8Dyqr3V5xfgRHPo%3D&x-amz-security-token=AgoJb3JpZ2luX2VjEJv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCWV1LXdlc3QtMSJGMEQCIEXBspeBxw6Axhy%2Bu36dyvkDVeh%2FSeSAokqELK5nTQXuAiBRALhOjcHBWPyUn9XzqRnKeI%2F%2F5s6YQ3LBkTsPjsfGAiqgAgiU%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDkxMzI3MjQzNDM0MiIMtyyjGn94KMtnYN0XKvQB9D7LiCfQ8Xmiza9YJ5MpiKHsr3ouFe2Hv3g9a%2FBGrQEp7Zo3sFRjRaI%2F9QtH5oYodmZGULhIxBlu3KOh4ZcwMiYSqLXOIFxJvofvwb0l%2Fxb5HRHiemu6fbD%2FTOYwz3MliwT9Fia3MPHma2yYJ0yX7Yp6meywHWII%2FG4DHsu9qoEeCmW1ctpDzTg%2BEssd1%2FhwnUoezExksWlQCLnMLnkhp%2FUU5ufINEr6%2F72o8W%2F%2BvuT6B4wDowWMzbA8pDTCs17Ce2J7MGMVSI82D7bTQxwnr5Nh5ea83bEGkb1ZOcuQG4nrkY3zZ%2BW2E%2FOfm8MfwBzMeDealTDGiajtBTq1AfI6FMwWLV6a1PNfIp9TMLux535MsHoj6%2FDSVG3JjUvbXsn%2BLIRWc34q6H4Opd4eyf8POUrv8zz69qrF8o%2FM48QC4uXwxk3HXonyv20K2lyHuYaNzaNiwInPpxmPqbr8ncNcrW8dZXPyft%2FzN%2FzpF0xfiDGx9FrGk2%2B70cnXLV7moZOXxz9wznZ%2BJWY%2FZhNOHCXB%2FyGZqkDBVeH%2FsBYeM6xZK31fZQvuOYZRk9ekaUnjXD6HujY%3D&Expires=1571430567"
  }
];
	showFirstImage();
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

function clickLabel(label) {
	console.log(`label ${label} has been clicked for image ${images[0].key}`);
	// TODO send a call to backend to label
	if(images.length > 1)
		images.shift();
	else
		alert('ALL OUT OF IMAGES FOR TODAY COME BACK TOMORROW!');
	showFirstImage();
}
