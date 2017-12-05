let selectedCell = null;

/**
 * Select the cell by e.g., displaying the appropriate style (red border?)
 * @param {!HTMLInputElement} cell the cell to select
 */

let selectCell = cell => {
  cell.classList.add("selected");
};

/**
 * Select the event's target cell by e.g., displaying the appropriate style (red border?) 
 * when the left mouse button is pressed
 * @param {!Event} the event with the target cell to potentially select
 */

let selectWhenLeftClicked = event => {
  if(mouseButtonPressed(event, 1)) {
    selectCell(event.target);
    event.preventDefault();
  }
};

/**
 * Make the custom context menu appear at the position given
 * @param {number} x The x-coordinate of the top left corner of the context menu
 * @param {number} y The y-coordinate of the top left corner of the context menu
 */

let showContextMenu = (x, y) => {
  document.getElementById("context-menu").classList.add("context-menu-display");
  document.getElementById("context-menu").classList.remove("hidden");

  if(typeof x === "number" && typeof y === "number") {
    document.getElementById("context-menu").style.left = x + "px";
    document.getElementById("context-menu").style.top = y + "px";
  }
};

/**
 * Hides the custom context menu
 */

let hideContextMenu = () => {
  document.getElementById("context-menu").classList.remove("context-menu-display");
  document.getElementById("context-menu").classList.add("hidden");
};

/**
 * Perform the supplied action on all input cells
 * @param {Function} action the function to call on each input cell
 */

let actOnAllCells = action => {
  Array.prototype.forEach.call(document.querySelectorAll(".input-cell"), action);
};

/**
 * Deselects all input cells by e.g., removing styling such as the red border
 */

let deselectAllCells = () => {
  actOnAllCells(cell => {
    cell.classList.remove("selected");
  });
};

/**
 * Blurs all input cells
 */

let blurAllCells = () => {
  actOnAllCells(cell => {
    cell.blur();
  });
};

/**
 * Cross-browser compatible way of detecting the index of the mouse button that was pressed
 * See browser support: http://eloquentjavascript.net/14_event.html#p_fndkFYbayW
 *                    : https://developer.mozilla.org/en-US/docs/Web/API/MouseEvent/buttons
 *                    : https://developer.mozilla.org/en-US/docs/Web/API/MouseEvent/which
 * @param {!Event} event
 * @param {number} index
 * @return {boolean} True exactly when index is the index of the mouse button pressed
 */

let mouseButtonPressed = (event, index) => {
  // See browser support: http://eloquentjavascript.net/14_event.html#p_fndkFYbayW
  //                    : https://developer.mozilla.org/en-US/docs/Web/API/MouseEvent/buttons
  //                    : https://developer.mozilla.org/en-US/docs/Web/API/MouseEvent/which

  var buttonClickedIndex = event.buttons !== null ? event.buttons : event.which;

  return buttonClickedIndex === index;
};

/** 
 * @todo FOR ASSIGNMENT 2, ADD YOUR OWN FUNCTION DEFINITIONS AS DIRECTED IN THE ASSIGNMENT
 * @todo THEN USING THESE FUNCTIONS, REPLACE THE 0 IN EACH FUNCTION DEFINITION BELOW WITH THE APPROPRIATE OUTPUT
 * @todo BE SURE TO DOCUMENT EACH FUNCTION IN JSDOC FORMAT (USE BELOW AS REFERENCE AND SEE: http://usejsdoc.org/)
 */

/**
 * Given units and conversionFactor, return the quotient in desired units 
 * @param {number} units is the number you wish to convert to a larger unit
 * @param {number} conversionfactor is a constant to achieve disired units
 * @return {number} the quotient of the units and conversionfactor in desired units
 */

let convertToLarger = (units, conversionFactor) => Math.trunc(units/conversionFactor)

/**
 * Given a number of milliseconds, returns seconds
 * @param {number} num the number of milliseconds to convert to seconds
 * @return {number} total seconds
 */

let msToSeconds = ms => convertToLarger(ms,1000); 

/**
 * Given a number of milliseconds, returns minutes
 * @param {number} num the number of milliseconds to convert to minutes
 * @return {number} total minutes
*/

let msToMinutes = ms => convertToLarger(msToSeconds(ms), 60);

/**
 * Given a number of milliseconds, returns hours
 * @param {number} num the number of milliseconds to convert to hours
 * @return {number} total hours
 */

let msToHours = ms => convertToLarger(msToMinutes(ms), 60);

/**
 * Given units and conversionFactor, return the quotient in desired units 
 * @param {number} units is the number you wish to convert to a larger unit
 * @param {number} conversionfactor is a constant to achieve disired units
 * @return {number} the quotient of the units and conversionfactor in desired units
 */

let remainingAfterConvert = (units, conversionFactor) => Math.trunc (units - (conversionFactor * Math.trunc(Math.trunc(units) / conversionFactor)))

/**
 * Given a number of milliseconds from midnight, returns the second (0 to 60) for the displayed time
 * @param {number} num the number of milliseconds to convert to seconds
 * @return {number} second for the displayed time (0 to 60)
 */

let getSecondFromMs   = num => remainingAfterConvert(msToSeconds(num), 60);

/**
 * Given a number of milliseconds from midnight, returns the minutes (0 to 60) for the displayed time
 * @param {number} num the number of milliseconds to convert to minutes
 * @return {number} minutes for the displayed time (0 to 60)
 */

let getMinuteFromMs   = num => remainingAfterConvert(msToMinutes(num), 60);

/**
 * Given a number of milliseconds from midnight, returns the hours (0 to 24) for the displayed time
 * @param {number} num the number of milliseconds to convert to hours
 * @return {number} hour for the displayed time (0 to 24)
 */

let getHourFromMs     = num => remainingAfterConvert(msToHours(num), 24);

/**
 * Given units and conversionFactor, return the product in desired units 
 * @param {number} units is the number you wish to convert to a smaller unit
 * @param {number} conversionfactor is a constant to achieve disired units
 * @return {number} the product of the units and conversionfactor in desired units
 */

let convertToSmaller = (units, conversionFactor) => (units * conversionFactor);

/**
 * Given a number of days, return total hours
 * @param {number} days to convert to hours
 * @return {number} the number of hours elapsed in the number of days
 */

let daysToTotalHours = days => convertToSmaller(days, 24);

/**
 * Given a number of days, return total minutes
 * @param {number} days to convert to minutes
 * @return {number} the number of minutes elapsed in the number of days
 */

let daysToTotalMinutes = days => convertToSmaller(daysToTotalHours(days), 60);

/**
 * Given a number of days, return total seconds
 * @param {number} days to convert to seconds
 * @return {number} the number of seconds elapsed in the number of days
 */

let daysToTotalSeconds = days => convertToSmaller(daysToTotalMinutes(days), 60);

/**
 * Given a number of days, return displayed number of seconds from (0 to 60)
 * @param {number} num of days to convert to seconds
 * @return {number} seconds for the displayed time (0 to 60)
 */

let getSecondFromDays = num => remainingAfterConvert(daysToTotalSeconds(num), 60); 

/**
 * Given a number of days, return displayed number of minutes from (0 to 60)
 * @param {number} num of days to convert to minutes
 * @return {number} minutes for the displayed time (0 to 60)
 */

let getMinuteFromDays = num => remainingAfterConvert(daysToTotalMinutes(num), 60);

/**
 * Given a number of days, return displayed number of hours from (0 to 24)
 * @param {number} num of days to convert to hours
 * @return {number} hours for the displayed time (0 to 24)
 */

let getHourFromDays   = num => remainingAfterConvert(daysToTotalHours(num), 24);

/* END REPLACEMENT FOR ASSIGNMENT 2 */

/**
 * Given a number of milliseconds after midnight, returns the hour, minute, and second as 
 * a text string in the form h:m:s where h is the hour from 0 to 24, m is the minute from 0 to 60
 * and s is the second also from 0 to 60
 * @param {number} num the number of milliseconds to convert
 * @return {string} h:m:s time
 */

let getTimeStrFromMs   = num => getHourFromMs(num) + ":" + getMinuteFromMs(num) + ":" + getSecondFromMs(num);

/**
 * Given a fractional number of days after midnight, returns the hour, minute, and second as 
 * a text string in the form h:m:s where h is the hour from 0 to 24, m is the minute from 0 to 60
 * and s is the second also from 0 to 60
 * @param {number} num the number of days, expressed as a decimal, from midnight
 * @return {string} h:m:s time
 */

let getTimeStrFromDays = num => getHourFromDays(num) + ":" + getMinuteFromDays(num) + ":" + getSecondFromDays(num);

/**
 * Given a format type (currently currency, time-ms, time-days, date, and other) and a numerical value for
 * the first four formats or currently any value for other, returns the value in the given format
 * @param {string} format the format of the value to return (currently currency, time-ms, time-days, date, and other)
 * @return {string} h:m:s time
 */

let formatCellValue = (format, value) => {
  if(format === "currency") {
    return "$" + value;
  } 
  else if(format === "time-ms") {
    return getTimeStrFromDays(value || 0);
  }
  else if(format === "time-days") {
    return getTimeStrFromMs(value || 0);
  }
  else if(format === "date") {
    return new Date(parseInt(value || 0));
  }
  else {
    return value;
  }
};

/**
 * Given a spreadsheet cell, returns its data-value attribute formatted according to its data-format attribute;
 * data values are determined by entered input while format is currently determined only by selected format from context menu
 * @param {!HTMLInputElement} cell
 * @return cell's data value formatted according to its data-format attribute
 */

let evalCell = cell => {
  let rawValue = cell.getAttribute("data-value"); // unformatted user input

  return formatCellValue(cell.getAttribute("data-format"), rawValue);
};

/**
 * Set data-value attributes of all input cells to empty string;
 * Add event listeners for all input cells
 */

Array.prototype.forEach.call(document.querySelectorAll(".input-cell"), ele => { 
  ele.setAttribute("data-value", "");
  
  /**
   * Add an event listener to select cell when it's being dragged over 
   */

  ele.addEventListener("mouseover", selectWhenLeftClicked);

  /**
   * Add an event listener to potentially change cell's value to possible new entered value
   * after it's been deselected 
   */

  ele.addEventListener("blur", event => {
    displayValue = evalCell(event.target);

    if(displayValue != event.target.value) {
      // cell value changed
      event.target.setAttribute("data-value", event.target.value);
    }
  });

  /**
   * Add an event listener to deselect all selected cells and hide the context menu
   * if showing when a cell is clicked (selected)
   */

  ele.addEventListener("click", event => {
    deselectAllCells();
    hideContextMenu();
  });

  /**
   * Add an event listener to hide the context menu
   * if showing when a cell is in focus
   */

  ele.addEventListener("focus", event => {
    hideContextMenu();
  });

  /**
   * When the context menu would ordinarily appear due to e.g., right mouse click, surpress the normal
   * context menu, and display and the custom one and set its top left corner to be the clicked location
   */

  ele.addEventListener("contextmenu", event => {
    event.preventDefault();
    selectedCell = event.target;
    showContextMenu(event.pageX, event.pageY);
  });

  /**
   * When the left button is being dragged to select other cells,
   * blur current cell where text was being entered if any (removes blinking cursor)
   */

  ele.addEventListener("mousemove", event => {
    if(mouseButtonPressed(event, 1)) {
      if(document.activeElement !== event.target) {
        setTimeout(blurAllCells, 100);
      }
      selectCell(event.target);
    }
  });
});

/**
* When the user clicks on any format option in the context menu, hide the menu
* and set the selected cell's data format to be the clicked option;
* then update that cell's display value so that it appears in the new format
*/ 

Array.prototype.forEach.call(document.querySelectorAll(".format"), ele => {
  ele.addEventListener("click", event => {
    hideContextMenu();

    if(selectedCell) {
      selectedCell.setAttribute("data-format", event.target.getAttribute("data-type"));
    }

    selectedCell.value = evalCell(selectedCell);
  });
});
