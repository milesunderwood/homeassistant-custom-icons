var icons = {
  "example_circle":[0,0,100,100,"M 5.0, 50.0 a 45.0,45.0 0 1,0 90.0,0 a 45.0,45.0 0 1,0 -90.0,0 "],
  "example_ellipse":[0,0,200,200,"M200.0 100.0 A100.0 50.0 0 0 1 100.0 150.0 A100.0 50.0 0 0 1 0.0 100.0 A100.0 50.0 0 0 1 200.0 100.0 z "],
  "example_multi":[0,0,100,100,"M 50 10 A 40 40 0 1 0 50 90 A 40 40 0 1 0 50 10 Z M 50 30 A 20 20 0 1 1 50 70 A 20 20 0 1 1 50 30 Z M0,100 50,25 50,75 100,0 "],
  "example_path":[0,0,100,100,"M 10,30            A 20,20 0,0,1 50,30            A 20,20 0,0,1 90,30            Q 90,60 50,90            Q 10,60 10,30 z "],
  "example_polygon":[0,0,210,210,"M100,10 40,198 190,78 10,78 160,198z "],
  "example_polyline":[0,0,100,100,"M0,100 50,25 50,75 100,0 "],
  "example_rect":[0,0,100,100,"M10.0 10.0 H90.0 V90.0 H10.0 V10.0z "],
  "miles":[,"M47.7,35.4     c0-4.6-3.7-8.2-8.2-8.2c-1,0-1.9,0.2-2.8,0.5c-0.3-3.4-3.1-6.2-6.6-6.2c-3.7,0-6.7,3-6.7,6.7c0,0.8,0.2,1.6,0.4,2.3     c-0.3-0.1-0.7-0.1-1-0.1c-3.7,0-6.7,3-6.7,6.7c0,3.6,2.9,6.6,6.5,6.7l17.2,0C44.2,43.3,47.7,39.8,47.7,35.4z M47.7,35.4     c0-4.6-3.7-8.2-8.2-8.2c-1,0-1.9,0.2-2.8,0.5c-0.3-3.4-3.1-6.2-6.6-6.2c-3.7,0-6.7,3-6.7,6.7c0,0.8,0.2,1.6,0.4,2.3     c-0.3-0.1-0.7-0.1-1-0.1c-3.7,0-6.7,3-6.7,6.7c0,3.6,2.9,6.6,6.5,6.7l17.2,0C44.2,43.3,47.7,39.8,47.7,35.4z "],
  }

async function getIcon(name) {
  if (!(name in icons)) {
    console.log(`Icon "${name}" not available`);
    return '';
  }

  var svgDef = icons[name];
  var primaryPath = svgDef[4];
  return {
    path: primaryPath,
    viewBox: svgDef[0] + " " + svgDef[1] + " " + svgDef[2] + " " + svgDef[3]
  }

}

async function getIconList() {
  return Object.entries(icons).map(([icon]) => ({
    name: icon
  }));
}

window.customIconsets = window.customIconsets || {};
window.customIconsets["custom"] = getIcon;

window.customIcons = window.customIcons || {};
window.customIcons["custom"] = { getIcon, getIconList };
