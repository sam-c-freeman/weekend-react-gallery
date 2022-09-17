CREATE TABLE "react_gallery" (
	"id" SERIAL PRIMARY KEY,
	"path" VARCHAR (150) NOT NULL,
	"description" VARCHAR (400) NOT NULL,
	"likes" INTEGER default 0
	);
	