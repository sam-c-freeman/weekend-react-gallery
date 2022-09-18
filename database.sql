-- I removed the Varchar limit for path because many image URLs were longer
-- than I expected.

CREATE TABLE "react_gallery" (
	"id" SERIAL PRIMARY KEY,
	"path" VARCHAR NOT NULL,
	"description" VARCHAR (400) NOT NULL,
	"likes" INTEGER default 0
	);
	

INSERT INTO "react_gallery"
	("path", "description", "likes")
	VALUES
	('images/frodoJersey.jpg','Frodo, a handsome guy, in a footbal jersey.', 0),
	('images/BenSam.jpg', 'Photo of my brother and I hiking in Montana.', 0),
    ('images/Miles.jpg','A black and white terrier dog', 0),
    ('images/QueLinda.jpg','A mural in Asheveille, NC', 0),
    ('images/SamSascha.jpg', 'Sam and Sascha cuddling', 0)
	;	
	
