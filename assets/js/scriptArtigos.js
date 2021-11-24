var url = "http://www.wixapis.com/blog/v3/posts";

var xhr = new XMLHttpRequest();
xhr.open("GET", url);

xhr.setRequestHeader("Content-Type", "application/json");
xhr.setRequestHeader("Authorization", "M5Jq3MD0RYGlvtqgbnIj0eIo7jvXnYPMeur7mdCezDI.eyJpbnN0YW5jZUlkIjoiNzg3YjQ1ZTYtY2M4Mi00NDExLTljZDQtNzlmNzZhZTc5NjVhIiwiYXBwRGVmSWQiOiIyMmJlZjM0NS0zYzViLTRjMTgtYjc4Mi03NGQ0MDg1MTEyZmYiLCJtZXRhU2l0ZUlkIjoiNzg3YjQ1ZTYtY2M4Mi00NDExLTljZDQtNzlmNzZhZTc5NjVhIiwic2lnbkRhdGUiOiIyMDIxLTExLTI0VDE1OjA3OjE5LjE3MFoiLCJ1aWQiOiI4Njc0NzdkOC1mYjNjLTQ2YTEtYmZkMi1hYmYzYWI3MDc1OWMiLCJwZXJtaXNzaW9ucyI6Ik9XTkVSIiwiZGVtb01vZGUiOmZhbHNlLCJzaXRlT3duZXJJZCI6Ijg2NzQ3N2Q4LWZiM2MtNDZhMS1iZmQyLWFiZjNhYjcwNzU5YyIsInNpdGVNZW1iZXJJZCI6Ijg2NzQ3N2Q4LWZiM2MtNDZhMS1iZmQyLWFiZjNhYjcwNzU5YyIsImV4cGlyYXRpb25EYXRlIjoiMjAyMS0xMS0yNFQxOTowNzoxOS4xNzBaIiwibG9naW5BY2NvdW50SWQiOiI4Njc0NzdkOC1mYjNjLTQ2YTEtYmZkMi1hYmYzYWI3MDc1OWMifQ");

xhr.onreadystatechange = function () {
   if (xhr.readyState === 4) {
      console.log(xhr.status);
      console.log(xhr.responseText);
   }};

xhr.send();