window.addEventListener("load", function() {
  $("pre code").each(function() {
    var me = $(this);
    // console.log(me.text().replace(/(^\w+)/, "<strong>$1</strong>"));
    me.html(
      me.text().replace(/(^\w+)/, '<strong style="color: #b0b9e9">$1</strong>')
    ); // $1 is regexe first word
  });
});
