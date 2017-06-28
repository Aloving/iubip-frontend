function formatName(name, tag) {
  var name = name;
  var tag = tag;
  var reg = new RegExp(tag, 'gi');

  return result = name.replace(reg, function(str) {
    return '<strong>' + str + '</strong>'
  });

}

module.exports = formatName;
