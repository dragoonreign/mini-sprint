'use strict';

var deleteInformation = function deleteInformation(_ref, callback) {
  var toDo = _ref.toDo,
      toDoId = _ref.toDoId;

  $.delete('http://127.0.0.1:8080/api/posts', {
    toDo: toDo,
    toDoId: toDoId
  }).done(function (_ref2) {
    var items = _ref2.items;

    if (callback) {
      callback(items);
    }
  }).fail(function (_ref3) {
    var responseJSON = _ref3.responseJSON;

    responseJSON.error.errors.forEach(function (err) {
      return console.error;
    });
  });
};

window.deleteInformation = deleteInformation;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9saWIvZGVsZXRlSW5mb3JtYXRpb24uanMiXSwibmFtZXMiOlsiZGVsZXRlSW5mb3JtYXRpb24iLCJjYWxsYmFjayIsInRvRG8iLCJ0b0RvSWQiLCIkIiwiZGVsZXRlIiwiZG9uZSIsIml0ZW1zIiwiZmFpbCIsInJlc3BvbnNlSlNPTiIsImVycm9yIiwiZXJyb3JzIiwiZm9yRWFjaCIsImVyciIsImNvbnNvbGUiLCJ3aW5kb3ciXSwibWFwcGluZ3MiOiI7O0FBQUEsSUFBSUEsb0JBQW9CLFNBQXBCQSxpQkFBb0IsT0FBaUJDLFFBQWpCLEVBQThCO0FBQUEsTUFBNUJDLElBQTRCLFFBQTVCQSxJQUE0QjtBQUFBLE1BQXRCQyxNQUFzQixRQUF0QkEsTUFBc0I7O0FBQ3BEQyxJQUFFQyxNQUFGLENBQVMsaUNBQVQsRUFBNEM7QUFDMUNILFVBQU1BLElBRG9DO0FBRTFDQyxZQUFRQTtBQUZrQyxHQUE1QyxFQUlDRyxJQUpELENBSU8saUJBQWE7QUFBQSxRQUFYQyxLQUFXLFNBQVhBLEtBQVc7O0FBQ2xCLFFBQUlOLFFBQUosRUFBYztBQUNaQSxlQUFTTSxLQUFUO0FBQ0Q7QUFDRixHQVJELEVBU0NDLElBVEQsQ0FTTSxpQkFBb0I7QUFBQSxRQUFsQkMsWUFBa0IsU0FBbEJBLFlBQWtCOztBQUN4QkEsaUJBQWFDLEtBQWIsQ0FBbUJDLE1BQW5CLENBQTBCQyxPQUExQixDQUFrQyxVQUFDQyxHQUFEO0FBQUEsYUFBU0MsUUFBUUosS0FBakI7QUFBQSxLQUFsQztBQUNELEdBWEQ7QUFZRCxDQWJEOztBQWVBSyxPQUFPZixpQkFBUCxHQUEyQkEsaUJBQTNCIiwiZmlsZSI6ImRlbGV0ZUluZm9ybWF0aW9uLmpzIiwic291cmNlc0NvbnRlbnQiOlsidmFyIGRlbGV0ZUluZm9ybWF0aW9uID0gKHt0b0RvLCB0b0RvSWR9LCBjYWxsYmFjaykgPT4ge1xyXG4gICQuZGVsZXRlKCdodHRwOi8vMTI3LjAuMC4xOjgwODAvYXBpL3Bvc3RzJywge1xyXG4gICAgdG9EbzogdG9EbyxcclxuICAgIHRvRG9JZDogdG9Eb0lkLFxyXG4gIH0pXHJcbiAgLmRvbmUgKCh7aXRlbXN9KSA9PiB7XHJcbiAgICBpZiAoY2FsbGJhY2spIHtcclxuICAgICAgY2FsbGJhY2soaXRlbXMpO1xyXG4gICAgfVxyXG4gIH0pXHJcbiAgLmZhaWwoKHtyZXNwb25zZUpTT059KSA9PiB7XHJcbiAgICByZXNwb25zZUpTT04uZXJyb3IuZXJyb3JzLmZvckVhY2goKGVycikgPT4gY29uc29sZS5lcnJvcik7XHJcbiAgfSk7XHJcbn07XHJcblxyXG53aW5kb3cuZGVsZXRlSW5mb3JtYXRpb24gPSBkZWxldGVJbmZvcm1hdGlvbjtcclxuIl19