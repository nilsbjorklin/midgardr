//Ids:
let raceSelectorId = "raceSelector";
let headerId = "header";
let infoTextId = "info_text";
let resultId = "result";
let resultRowId = "resultRow";
let resultModifiedId = "result_modified";
let raceAttributesId = "raceAttributes";

//classes
let rowClass = "row";
let attributesColumnClass = "attributeColumns";


let submitButtonName = "Räkna";

let attributes = [];

let races =  []

let attributesArray = ["Hälsa","Uthållighet","Skadebonus","Inlärningsförmåga","Ledarskap","Skarpsinne","Initativsnabb","Undvika Anfall","Obeväpnadstrid","Huggvapen","Krossvapen","Kättingvapen","Stickvapen","Sköldskicklighet"];

let racesData = [
    //[tag,         "Name",      "hp",   "uth",  "sb",   "inl",  "ls",   "ss",   "ini",  "ua",   "oe",   "hugg",     "kross",    "kätting",  "stick",    "sköld"]
    ["alv",         "Alv",         0.9,    1.2,    0.9,    0.5,    1.3,    1,      1.4,    1.5,    1.1,    1.2,        1.1,        1.1,        1.3,        1.2],
    ["dvarg",       "Dvärg",       1.4,    1.1,    1.1,    0.5,    1,      1,      0.8,    0.6,    0.9,    1.2,        1.1,        1.1,        0.9,        0.9],
    ["manniska",    "Människa",    1.1,    1.1,    1.1,    0.5,    1.1,    1,      1.1,    1.1,    1.1,    1.2,        1.1,        1.1,        1.1,        1.1],
    ["ork",         "Ork",         1.2,    1.1,    1.3,    0.5,    0.8,    1,      1,      0.7,    0.9,    1,          1.1,        1.1,        1,          0.9],
    ["troll",       "Troll",       1.5,    0.7,    1.6,    0.5,    0.5,    1,      0.5,    0.3,    0.5,    0.8,        0.9,        0.9,        0.8,        0.5]
]
/*
Troll
+50% Hälsa
-30% Uthållighet
+60% Skadebonus

Intelligens
-50% Inlärningsförmåga
-50% Ledarskap

Smidighet
-50% Initiativ
-50% Obeväpnad strid
-70% Undvika anfall
-20% Huggvapen
-10% Krossvapen
-10% Kättingvapen
-20% Stickvapen
-50% Sköld

Ork
+20% Hälsa
+10% Uthållighet
+30% Skadebonus

Intelligens
-50% Inlärningsförmåga
-20% Ledarskap

Smidighet
-30% Undvika anfall
-10% Obeväpnad strid
+10% Krossvapen
+10% Kättingvapen
-10% Sköld

Alv
-10% Hälsa
+20% Uthållighet
-10% Skadebonus

Intelligens
-50% Inlärningsförmåga
+30% Ledarskap

Smidighet
+40% Initiativ
+50% Undvika anfall
+10% Obeväpnad strid
+20% Huggvapen
+10% Krossvapen
+10% Kättingvapen
+30% Stickvapen
+20% Sköld*

Dvärg
+40% Hälsa
+10% Uthållighet
+10% Skadebonus

Intelligens
- 50% Inlärningsförmåga

Smidighet
-20% Initiativ
-40% Undvika anfall
-10% Obeväpnad strid
+20% Huggvapen
+10% Krossvapen
+10% Kättingvapen
-10% Stickvapen
-10% Sköld
*/