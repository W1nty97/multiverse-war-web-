INSERT INTO classes (id, class_name) VALUES
  ('mythic','card-class-mythic'),
  ('cammon','card-class-cammon'),
  ('rare','card-class-rare'),
  ('epic','card-class-epic'),
  ('legend','card-class-legend');
INSERT INTO public."characters" ("name","version","element","type",rarity,strength,health,speed,mind,class_id,img) VALUES
	 ('Ermak','Souls Before Our Era','hard','Mage','Legendary',93,80,45,15,'legend','./imgData/ermak_legend_souls_before_our_era.png');
