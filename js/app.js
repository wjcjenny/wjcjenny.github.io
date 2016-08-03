this["Reuters"] = this["Reuters"] || {};
this["Reuters"]["Template"] = this["Reuters"]["Template"] || {};

this["Reuters"]["Template"]["basictemplate"] = function(obj) {
obj || (obj = {});
var __t, __p = '', __e = _.escape;
with (obj) {
__p += '';

}
return __p
};

this["Reuters"]["Template"]["chartTemplate"] = function(obj) {
obj || (obj = {});
var __t, __p = '', __e = _.escape, __j = Array.prototype.join;
function print() { __p += __j.call(arguments, '') }
with (obj) {

if (self.columnNames){;
__p += '\n\t<div class="chart-nav"></div>\n';
};
__p += '\n';
if (self.navSpacer){;
__p += '\n\t<div class="chart-nav">\n\t\t<div class="navContainer"></div>\n\t</div>\n';
};
__p += '\n\n';
if (self.chartLayoutLables){;
__p += '\n\t<div class="chart-layout"></div>\n';
};
__p += '\n<div class="chart-holder \n\t';
if (!self.hasLegend){print('no-legend')};
__p += '\n\t">\n\t<div class="legend nested-legend"></div>\n\t<div class="chart nested-chart"></div>\n</div>';

}
return __p
};

this["Reuters"]["Template"]["legendTemplate"] = function(obj) {
obj || (obj = {});
var __t, __p = '', __e = _.escape, __j = Array.prototype.join;
function print() { __p += __j.call(arguments, '') }
with (obj) {
__p += '<div class=\'legendContainer\'>\n\t<div class="legend-ital">Click to hide/show</div>\n\t<div class=\'dateTip\'> \n\t\t';
 if (data[0].displayDate){
			print(data[0].displayDate)
		}
		if (data[0].category){
			print(data[0].category)
		}
		if (!data[0].category && !data[0].displayDate){
			print('<br>')
		};
__p += '\n\t</div>\n\t<div class="legend-items-holder">\n\t\t';
 data.forEach(function(d){;
__p += '\n\t\t\t<div class="legendItems">\n\t\t\t\t<div class=\'circleTip ' +
((__t = (self.chartType)) == null ? '' : __t) +
'\' style=\'background-color:' +
((__t = (self.colorScale(d.name))) == null ? '' : __t) +
';\'></div>\n\t\t\t\t<div class="legendInline">\n\t\t\t\t\t<div class="nameTip">\t' +
((__t = ( d.displayName )) == null ? '' : __t) +
'</div>\n\t\t\t\t\t<div class=\'valueTip\'>\n\t\t\t\t\t\t';
 if (d[self.dataType]){
							print(self.tipNumbFormat(d[self.dataType]))
						}else{
							print("<br>")
						};
__p += '\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t';
});
__p += '\n\t</div>\t\t\n</div>\n\n';

}
return __p
};

this["Reuters"]["Template"]["tooltip"] = function(obj) {
obj || (obj = {});
var __t, __p = '', __e = _.escape, __j = Array.prototype.join;
function print() { __p += __j.call(arguments, '') }
with (obj) {

if (data[0].displayDate){;
__p += '\n<div class=\'dateTip\'> ' +
((__t = (data[0].displayDate)) == null ? '' : __t) +
' </div>\n';
}else{;
__p += '\n<div class=\'dateTip\'> ' +
((__t = (data[0].category)) == null ? '' : __t) +
' </div>\n';
};
__p += '\n';
data.forEach(function(d,i){;
__p += '\n\t\t<div class="tipHolder">\n\t\t\t<div class=\'circleTip ' +
((__t = (self.chartType)) == null ? '' : __t) +
'\' style=\'background-color:' +
((__t = (self.colorScale(d.name))) == null ? '' : __t) +
';\'></div>\n\t\t\t<div class=\'nameTip\'>' +
((__t = (d.displayName)) == null ? '' : __t) +
'</div>\n\t\t\t<div class=\'valueTip\'>\n\t\t\t\t';
if (self.chartLayout == "stackPercent"){;
__p += '\n\t\t\t\t\t' +
((__t = (self.tipNumbFormat(d.y1Percent - d.y0Percent))) == null ? '' : __t) +
'\t\t\t\t\n\t\t\t\t';
}else{;
__p += '\n\t\t\t\t\t' +
((__t = (self.tipNumbFormat(d[self.dataType]))) == null ? '' : __t) +
'\t\t\t\t\n\t\t\t\t';
};
__p += '\n\t\t\t</div>\n\t\n\t\t</div>\n';
});
__p += '\t\n';
if(self.timelineData){
	var timelineData = self.timelineDataGrouped[self.timelineDate(data[0].date)]
	print(self.timelineTemplate({data:timelineData, self:self}))
};
__p += '\t';

}
return __p
};

this["Reuters"]["Template"]["tooltipTimeline"] = function(obj) {
obj || (obj = {});
var __t, __p = '', __e = _.escape, __j = Array.prototype.join;
function print() { __p += __j.call(arguments, '') }
with (obj) {
__p += '<hr>\n';
data.forEach(function(d,i){;
__p += '\n\t<div class="tip-Timeline-date text-uppercase">\n\t\t' +
((__t = (self.timelineDateDisplay(d.parsedDate))) == null ? '' : __t) +
'\n\t</div>\n\t<div class="tip-Timeline">\n\t\t' +
((__t = (d.item)) == null ? '' : __t) +
'\n\t</div>\n\n\t';
if (i != data.length-1){print('<br>')};
__p += '\n\n';
});
__p += ' ';

}
return __p
};
var forest1 = "#C4D6C4";var forest2 = "#A5C3A8";var forest3 = "#73A97F";var forest4 = "#008C4E";var forest5 = "#007741";var forest6 = "#005027";var green1 = "#CBE1C8";var green2 = "#AED3AB";var green3 = "#7DBE80";var green4 = "#0AA74B";var green5 = "#008C3E";var green6 = "#005E25";var olive1 = "#E0EDCB";var olive2 = "#D0E4AF";var olive3 = "#B4D682";var olive4 = "#8FC641";var olive5 = "#74A535";var olive6 = "#476E1E";var lime1 = "#EFF4CC";var lime2 = "#E8EEAF";var lime3 = "#DBE580";var lime4 = "#CADB2E";var lime5 = "#A6B626";var lime6 = "#6A7812";var yellow1 = "#FCF8CD";var yellow2 = "#FBF5B0";var yellow3 = "#F9F17E";var yellow4 = "#F6EB0E";var yellow5 = "#CAC313";var yellow6 = "#838103";var tangerine1 = "#FFECC6";var tangerine2 = "#FFE3A7";var tangerine3 = "#FFD576";var tangerine4 = "#FDC218";var tangerine5 = "#D0A115";var tangerine6 = "#886A00";var orange1 = "#FDD5BB";var orange2 = "#FBBE99";var orange3 = "#F79967";var orange4 = "#F26725";var orange5 = "#C8551D";var orange6 = "#843401";var red1 = "#FBC9BA";var red2 = "#F8AB98";var red3 = "#F37B68";var red4 = "#EC2033";var red5 = "#C31729";var red6 = "#82000D";var rose1 = "#E9C3C8";var rose2 = "#DFA4AE";var rose3 = "#D17589";var rose4 = "#C02460";var rose5 = "#A11950";var rose6 = "#6B0031";var violet1 = "#DABFD1";var violet2 = "#C99FBB";var violet3 = "#B1709B";var violet4 = "#952978";var violet5 = "#7E1E65";var violet6 = "#530041";var purple1 = "#CABDDC";var purple2 = "#B19CC9";var purple3 = "#8D6EAE";var purple4 = "#653290";var purple5 = "#552479";var purple6 = "#360451";var navy1 = "#BCC2E0";var navy2 = "#9BA4CF";var navy3 = "#697CB8";var navy4 = "#0F519F";var navy5 = "#0A4286";var navy6 = "#002459";var blue1 = "#C8DAF0";var blue2 = "#ABC8E8";var blue3 = "#7AADDC";var blue4 = "#1F8FCE";var blue5 = "#1B78AC";var blue6 = "#044F74";var cyan1 = "#CFE8F9";var cyan2 = "#B5DDF6";var cyan3 = "#86CCF1";var cyan4 = "#2AB8EB";var cyan5 = "#259AC5";var cyan6 = "#0C6785";var gray1 = "#DCDDDE";var gray2 = "#BCBEC0";var gray3 = "#939598";var gray4 = "#6D6E71";var gray5 = "#4D4D4F";var gray6 = "#414042";var grey1 = "#AFBABF";var grey2 = "#D4D8DA";var black = "#231F20";var white = "#FFFFFF";//relative colors,var staticnav = grey1;var selectednav = black;
Reuters = Reuters || {};
Reuters.Graphics = Reuters.Graphics || {};
//individual points
Reuters.Graphics.DataPointModel = Backbone.Model.extend({
	initialize:function(attributes, options) {
		return;
    },
    
	parse: function(point, options){
		if (point.date){
			point.rawDate = point.date;
			point.date = options.collection.parseDate(point.date);
			point.displayDate = options.collection.dateFormat(point.date);
		}
		return point;
	},
});

//the collection of datapoint which will sort by date.
Reuters.Graphics.DataPointCollection = Backbone.Collection.extend({
	initialize: function(models, options) {
		var self = this;
		_.each(options, function(item, key){
			self[key] = item;
		});
	},
	
	comparator: function(item) {
		var self = this;
		return item.get("date");
    },
	
	model: Reuters.Graphics.DataPointModel,
	
	parse: function(data){
		var self = this;
		return data;
	},
});

//a model for each collection of data
Reuters.Graphics.DataSeriesModel = Backbone.Model.extend({	
	defaults: {
		name: undefined,
		values: undefined,
		visible:true, 
	},
	
	initialize: function(attributes, options){
		var self = this;
		var totalChange = 0;
		var cumulate = 0;
		var name = self.get("name");
		var firstItem = self.get("values").at(0);
		var firstValue = parseFloat(firstItem.get(name));

		self.get("values").each(function(currentItemInLoop){
			var previousItem = self.get("values").at(self.get("values").indexOf(currentItemInLoop) - 1);
			var currentValue = parseFloat(currentItemInLoop.get(name));
			var change, percent;
			if(previousItem){
				var previousValue = parseFloat(previousItem.get(name).value);
				change = currentValue - previousValue;
				totalChange += change;
				cumulate += currentValue
				percent = ((currentValue / firstValue) - 1)*100;				
				currentItemInLoop.set(name, {changePreMonth: change, cumulate:cumulate, CumulativeChange: totalChange, percentChange: percent, value:currentValue/options.collection.divisor});
			}else{
				currentItemInLoop.set(name, {changePreMonth: 0, cumulate:currentValue, CumulativeChange: 0, percentChange: 0, value:currentValue/options.collection.divisor});
			}			
		});
	},
	
	parse:function(point, options){
		return point;
	}			
});

//a collection of those collectioins
Reuters.Graphics.DateSeriesCollection = Backbone.Collection.extend({
	initialize: function(models, options) {
		var self = this;
		_.each(options, function(item, key){
			self[key] = item;
		});
	},
	
	comparator: function (item){
		var self = this;
		var name = item.get("name");
		var lastItem = item.get("values").last();
		// for time series, is going to be last value
		var valueForSort = lastItem.get(name)[self.dataType];
		//if categories, find greatest value for each
		if (lastItem.get("category")){
			valueForSort = item.get("values")
				.max(function(d){
					return d.get(name)[self.dataType];
				})
				.get(name)[self.dataType];
		}

		var plusMinus = 1;
		if (Array.isArray(self.groupSort)){
			return self.groupSort.indexOf(name);
		}
		if (self.groupSort == "descending"){plusMinus = -1;}
		return plusMinus * valueForSort;
	},
	
	model: Reuters.Graphics.DataSeriesModel,
	
	parse: function(data){
		var self = this;

		self.on('reset', function(d){
			if (d.first().get("values").first().get("category")){
				self.categorySorter(d);
			}
			self.makeStacks(d);

		});
		self.on("change", function(d){
			self.makeStacks(d);			
		});


		return data;
	},
	
	categorySorter: function(item){
		var self = this;
		var name = item.last().get("name");
		var plusMinus = 1;
		if (self.categorySort == "descending"){plusMinus = -1;}

		item.last().get("values").models.sort(function(a,b){			
			if (a.get(name)[self.dataType] > b.get(name)[self.dataType]){ return (1 * plusMinus);}
			if (a.get(name)[self.dataType] < b.get(name)[self.dataType]){ return (-1 * plusMinus);}
			return 0;
		});

    if (!Array.isArray(self.categorySort)){
			self.categorySort = [];
			item.last().get("values").each(function(d){
				self.categorySort.push(d.get("category"));
			});
		}
		
		item.each(function(d){
			d.get("values").models.sort(function(a,b){
				if (self.categorySort.indexOf(a.get("category")) > self.categorySort.indexOf(b.get("category"))){return 1;}
				if (self.categorySort.indexOf(a.get("category")) <  self.categorySort.indexOf(b.get("category"))){return -1;}
				return 0;
			});
		});
		
	},
	
	makeStacks: function(item){
		var self = this;
		var filtered = self.filter(function(d){
			return d.get("visible");
		});
		
		filtered.forEach(function(eachGroup, indexofKey){
			var name = eachGroup.get("name");
			//back to here
			eachGroup.get("values").each(function(d,i){
				var masterPositive = 0;
				var masterNegative = 0;		    	
				var stackTotal = 0;
				var masterPercent = 0;
				var stackMin = 0;
				var thisValue = d.get(name)[self.dataType];
				var counter;
        
				filtered.forEach(function (collection, counter){
					var loopName = collection.get("name");
					var currentValue = collection.get("values").at(i).get(loopName)[self.dataType];
					if (currentValue >=0) {
						stackTotal = stackTotal + currentValue;
					}else{
						stackMin = stackMin + currentValue;							
					}
				});

				for (counter = indexofKey; counter< filtered.length; counter++){					
					var loopName = filtered[counter].get("name");
					var currentValue = filtered[counter].get("values").at(i).get(loopName)[self.dataType];
					if ( currentValue > 0){	
						masterPositive = masterPositive + currentValue;
						masterPercent = masterPercent + (currentValue/stackTotal)*100;
					}else{						
						masterNegative = masterNegative + currentValue;
					}
				}							
				var y0Total = masterPositive - thisValue;
				var y1Total = masterPositive;
				if (thisValue < 0){
					y0Total = masterNegative - thisValue;
					y1Total = masterNegative;
				}									
				d.set(name, _.extend(d.get(name),{y0Total:y0Total, y1Total:y1Total, stackTotal:stackTotal, stackMin:stackMin, y0Percent:masterPercent-((thisValue/stackTotal)*100), y1Percent:masterPercent}));
			});									
		});
	}
	
});



Reuters = Reuters || {};
Reuters.Graphics = Reuters.Graphics || {};
//the view that constructs a linechart
Reuters.Graphics.ChartBase = Backbone.View.extend({
	groupSort:"descending", 
	categorySort:"ascending",
	margin: {top: 40, right: 20, bottom: 30, left: 40},
	dateFormat: d3.time.format("%b %Y"),
	tipTemplate:Reuters.Template.tooltip,
	chartTemplate:Reuters.Template.chartTemplate,
	legendTemplate: Reuters.Template.legendTemplate,
	tipNumbFormat: function(d){
		var self = this;
		if (isNaN(d) === true){return "N/A";}else{
			return self.dataLabels[0] + self.numbFormat(d) + self.dataLabels[1] ;				
		}				
	},
	colors:[blue3, purple3,orange3, red3,yellow3],
	dataType:'value',		
	xScaleTicks: 5,
	yScaleTicks:5,
	YTickLabel: [["",""]],	
	numbFormat: d3.format(",.0f"),
	lineType: "linear",
	chartBreakPoint:300,
	hasLegend:true,
	xOrY : "x",
	yOrX : "y",
	leftOrTop : "left",
	heightOrWidth : "height",
	widthOrHeight : "width",
	topOrLeft : "top",
	recessionDateParse : d3.time.format("%m/%d/%Y").parse,
	updateCount:0,
	divisor:1,
	timelineDate:d3.time.format("%m/%d/%Y"),	
	timelineDateDisplay: d3.time.format("%b %e, %Y"),
	timelineTemplate:Reuters.Template.tooltipTimeline,		
	initialize: function(opts){
		var self = this;
		this.options = opts; 		
		
		// if we are passing in options, use them instead of the defualts.
		_.each(opts, function(item, key){
			self[key] = item;
		});	

		if (self.timelineData){
			self.loadTimelineData()
		}else{
			self.loadData()					
		}

	},
	loadData:function(){
		var self = this;
		//Test which way data is presented and load appropriate way
		if (this.dataURL.indexOf("csv") == -1 && typeof(this.dataURL) != "object"){
			d3.json(self.dataURL, function(data){
				self.parseData (data);
			});
		} 
		if (this.dataURL.indexOf("csv") > -1){
			d3.csv(self.dataURL, function(data){
				self.parseData (data);
			});
		}
		if (typeof(this.dataURL) == "object"){
			setTimeout(function(){
				self.parseData (self.dataURL);											
			}, 100);
		}				
	},
	loadTimelineData:function(){
		var self = this;
		//Test which way data is presented and load appropriate way
		if (this.timelineData.indexOf("csv") == -1 && typeof(this.timelineData) != "object"){
			d3.json(self.timelineData, function(data){
				self.timelineData = data;
				self.loadData ();
				return
			});
		} 
		if (this.timelineData.indexOf("csv") > -1){
			d3.csv(self.timelineData, function(data){
				self.timelineData = data;
				console.log(self.timelineData)
				self.loadData ();
				return
			});
		}
		if (typeof(this.timelineData) == "object"){
				self.loadData ();
				return
		}			
	},
	formatDataStream: function(response){
		var newArray = []
		
		response.Dates.forEach(function(d,i){					
			var obj={}

			var newDate = d.replace(/\//g, '').replace('Date(','').replace(')','').replace('+0000','')
			var date = new Date(+newDate)
			var betterDate = new Date(date.valueOf() + date.getTimezoneOffset() * 60000)
			var formatDate = (betterDate.getMonth()+1)+"/"+betterDate.getDate()+"/"+betterDate.getFullYear()

			obj.date = formatDate
							
			response.DataTypeValues[0].SymbolValues.forEach(function(item,index){
				var name = response.DataTypeValues[0].SymbolValues[index].Symbol;					
				obj[name] = response.DataTypeValues[0].SymbolValues[index].Value[i];					
			})
			
			newArray.push(obj)
			
		})
		return newArray
		
	},
	parseData: function (data){			
		var self = this;

		if (self.dataStream){
			var response = data.DataResponse || data.DataResponses[0]
			data = self.formatDataStream(response)
		}

		//figuring out if there is a timescale, is this necessary?
		if (data[0].date){self.hasTimeScale = true;}
		// if parser undefined, figure out if it's a 4 year or 2 year date and set parser to match		
		if (self.hasTimeScale && !self.parseDate){
			if (data[0].date.split('/')[2].length == 2){						
				 self.parseDate = d3.time.format("%m/%d/%y").parse;
			}
			if (data[0].date.split('/')[2].length == 4){						
				 self.parseDate = d3.time.format("%m/%d/%Y").parse;
			}			
		}				
		//figure out current chart label, if it's switching between them.
		if (self.chartLayoutLables){
			self.chartLayout = self.chartLayoutLables[self.chartLayoutLables.length-1];
		}

		//set values if horizontal or not
		if (self.horizontal){
			self.xOrY = "y";
			self.yOrX = "x";
			self.leftOrTop = "top"; 
			self.heightOrWidth = "width";
			self.widthOrHeight = "height";				
			self.topOrLeft = "left";
		}

	
		//find values to map, if not defined
		if (!self.columnNames){
			self.columnNames = _.keys(data[0]).filter(function(d){
				return d != "date" && d != "category"  && d !== "type"  && d !== "rawDate" && d !== "displayDate";
			});
			self.columnNamesDisplay = self.columnNames;
		}		
		if (_.isObject(self.columnNames) && !_.isArray(self.columnNames)){
			self.columnNamesDisplay = _.values(self.columnNames);
			self.columnNames = _.keys(self.columnNames);
		}
		if (_.isArray(self.columnNames) && !self.columnNamesDisplay){
			self.columnNamesDisplay = self.columnNames;
		}
		
		self.colorScale = d3.scale.ordinal();
		//figure out the color scale		
		if (_.isObject(self.colors) && !_.isArray(self.colors)){
			self.colorScale.domain(_.keys(self.colors));
			self.colorScale.range(_.values(self.colors));
		}
		if (_.isArray(self.colors)){
			self.colorScale.domain(self.columnNames);
			self.colorScale.range(self.colors);
		}

		//handle multidata
		if (data[0].type){
			if (!self.multiDataColumns){
				self.multiDataColumns = _.uniq(_.pluck(data, 'type'));
			}
			var groupedData = _.groupBy(data,"type");
			self.multiDataColumns.forEach(function(d){
				self.modelData(groupedData[d], d);				
			});
		}else{
			if (self.multiDataColumns){
				self.dataType = self.multiDataColumns[self.multiDataColumns.length-1];
			}
			self.modelData(data, "dataholder");
		}

		//make labels if none
		if (!self.multiDataLabels && self.multiDataColumns){
			self.multiDataLabels = self.multiDataColumns;
		}

		self.flattenData(self.chartData);
		self.baseRender();			
		self.renderChart(); 																 				
								
	},
	
	//function to make all the data.  
	modelData : function(data, name){
		var self = this;
		
		if (!self.groupedData){self.groupedData = {};}
		self.groupedData[name] = new Reuters.Graphics.DataPointCollection([],{parseDate:self.parseDate, dateFormat:self.dateFormat });
		self.groupedData[name].reset(data, {parse:true});

		self[name] = new Reuters.Graphics.DateSeriesCollection([], {parseDate:self.parseDate, groupSort:self.groupSort, divisor:self.divisor, categorySort:self.categorySort, dataType:self.dataType, multiDataColumns:self.multiDataColumns, dateFormat:self.dateFormat});
		
		self[name].reset(
			self.columnNames.map(function(d,i){
				return {name:d, displayName:self.columnNamesDisplay[i], values:self.groupedData[name]};
			}),
			{parse:true}
		);
		self.chartData = self[name];
	},
	
	flattenData:function(data){
		var self = this;

		var filtered = data.filter(function(d){
				return d.get("visible");
			});

		self.jsonData = _.invoke(filtered, 'toJSON');		
		self.jsonData.forEach(function(d){
			var name = d.name;
			d.values = d.values.toJSON();
			d.values.forEach(function(point){
				_.extend(point, point[name]);
				point.name = name;
			});
		});
		

		if (self.timelineData){
			self.showTip = true;
			var closestData = null;				
			self.timelineData.forEach(function(timelineItem){
				timelineItem.parsedDate = self.parseDate(timelineItem.date);	
					
				self.chartData.first().get("values").each(function(d,i){
					if (closestData === null || Math.abs(d.get("date") - timelineItem.parsedDate) < Math.abs(closestData - timelineItem.parsedDate)){
						closestData = d.get("date");
					}
					timelineItem.closestDate = closestData;			
					timelineItem.formatedDate = self.timelineDate(timelineItem.closestDate);
				});
			})
			self.timelineDataGrouped = _.groupBy(self.timelineData, "formatedDate")

		}

	},
	barCalculations:function(){
		var self = this;
		// some aspects of the data useful for figuring out bar placement
		self.dataLength = 0;
		
		self.jsonData.forEach(function(d){
			if( d.values.length > self.dataLength){
				self.dataLength = d.values.length;
			}
		});
		self.numberOfObjects = function(){ 
			if (self.chartLayout == "onTopOf"){ return 1; }else{
				return self.jsonData.length;
			}
		};

		self.widthOfBar = function(){
			if (self.chartLayout == "stackTotal" || self.chartLayout == "stackPercent"){
				return (self[self.widthOrHeight] / (self.dataLength)) - (self[self.widthOrHeight] / (self.dataLength)) * 0.2;
			}else{				
				return (self[self.widthOrHeight] / (self.dataLength*self.numberOfObjects())) - (self[self.widthOrHeight] / (self.dataLength * self.numberOfObjects())) * 0.2;
			}
		};		
	},

	baseRender: function() {
		var self = this;
		self.trigger("baseRender:start");

		//make basic template and set names of stuff
		self.$el.html(self.chartTemplate({self:self}));
		if (self.$el.width() < self.chartBreakPoint){
			self.$el.find('.chart-holder').addClass("smaller");
		}

		//make a label based on the div's ID to use as unique identifiers 
		self.targetDiv = self.$el.attr("id");
		self.chartDiv = self.targetDiv + " .chart";
		self.legendDiv = self.targetDiv + " .legend";
		self.$chartEl = $("#"+self.chartDiv);
		self.$legendEl = $("#"+self.legendDiv);

						
		//set the width and the height to be the width and height of the div the chart is rendered in
		self.width = self.$chartEl.width() - self.margin.left - self.margin.right;
		
		//if no height set, square, otherwise use the set height, if lower than 10, it is a ratio to width
		if (!self.options.height){
			self.height = self.$chartEl.width() - self.margin.top - self.margin.bottom;			
		}
		if (self.options.height < 10){
			if ($(window).width() < 400){
				self.height = self.$chartEl.width() - self.margin.top - self.margin.bottom;							
			}else{
				self.height = (self.$chartEl.width() * self.options.height) - self.margin.top - self.margin.bottom;				
			}
		}
				
		self.barCalculations();

		//create an SVG
		self.svg = d3.select("#"+self.chartDiv).append("svg")
			.attr({
				width: self.width + self.margin.left + self.margin.right,
				height:self.height + self. margin.top + self.margin.bottom
				})
		    .append("g")
		    .attr("transform", "translate(" + self.margin.left + "," + self.margin.top + ")");  
		        
		//make a rectangle so there is something to click on
		self.svg.append("svg:rect")
			.attr({
				width:self.width,
				height:self.height,
				class:"plot"
			});
		
		 //make a clip path for the graph  
		 self.clip = self.svg.append("svg:clipPath")
		    .attr("id", "clip" + self.targetDiv)
		    .append("svg:rect")
		    .attr({
			    x: - self.margin.left,
			    y: -4,
			    width:self.width + self.margin.left + 8,
			    height:self.height +8
		    });

		//go get the scales from the chart type view
		this.scales = {
			x: this.getXScale(),
			y: this.getYScale()
		};
	   
		//render all the incidentals.		
		self.recessionMaker();
		self.scaleMaker();
		self.toolTipMaker();
		self.legendMaker();	
		self.multiDataMaker();
		self.chartLayoutMaker();
		self.baseUpdate(1);
		
		$(window).on("resize", _.debounce(function(event) {
			var width =  self.$el.width();
			if (width < self.chartBreakPoint){
				self.$el.find('.chart-holder').addClass("smaller");
			}else{
				self.$el.find('.chart-holder').removeClass("smaller");
			}
			self.update();
		},100));
		
		self.trigger("baseRender:end");
		//end of chart render			
		return this;
	},
	
	setWidthAndMargins: function (){
		var self = this;

		//length of largest tick
		var maxWidth = -1;
		$("#" + self.targetDiv+ " .y.axis").find("text").not(".topTick").each(function(){
			maxWidth = maxWidth > $(this).width() ? maxWidth : $(this).width();
		});
		if (maxWidth === 0){
			$("#" + self.targetDiv+ " .y.axis").find("text").not(".topTick").each(function(){
				maxWidth = maxWidth > $(this)[0].getBoundingClientRect().width ? maxWidth : $(this)[0].getBoundingClientRect().width;
			});
		}

		if (!self.options.margin){
			self.margin = {top:15, right: 20, bottom: 30, left:9 +  maxWidth};
		}

		self.width = this.$chartEl.width() - self.margin.left - self.margin.right;			
		if (!self.options.height){
			self.height = self.$chartEl.width() - self.margin.top - self.margin.bottom;			
		}
		if (self.options.height < 10){
			if ($(window).width() < 400){
				self.height = self.$chartEl.width() - self.margin.top - self.margin.bottom;							
			}else{
				self.height = (self.$chartEl.width() * self.options.height) - self.margin.top - self.margin.bottom;
			}
		}
	},

	recessionMaker: function(){
		var self = this;
		//put in the recessions, if there are any.
		if (!self.hasRecessions){
			return;
		}

		var recessionData = [{"recess":[{"start":"5/1/1937","end":"6/1/1938"},{"start":"2/1/1945","end":"10/1/1945"},{"start":"11/1/1948","end":"10/1/1949"},{"start":"7/1/1953","end":"5/1/1954"},{"start":"8/1/1957","end":"4/1/1958"},{"start":"4/1/1960","end":"2/1/1961"},{"start":"12/1/1969","end":"11/1/1970"},{"start":"11/1/1973","end":"3/1/1975"},{"start":"1/1/1980","end":"7/1/1980"},{"start":"7/1/1981","end":"11/1/1982"},{"start":"7/1/1990","end":"3/1/1991"},{"start":"3/1/2001","end":"11/1/2001"},{"start":"12/1/2007","end":"6/1/2009"}]}];	
		self.recessions = self.svg.selectAll('.recession')
			.data (recessionData);
			
		self.recessionsEnter = self.recessions.enter().append('g')
			.attr({
				"clip-path":"url(#clip" + self.targetDiv + ")",
				class:"recession",
			});
	
		self.recessionsEnter.selectAll("rect")
			.data( function(d) {return(d.recess);} )
			.enter()
			.append("rect")
			.attr({
				class:"recessionBox",
				x:function(d){return self.scales.x(self.recessionDateParse(d.start));},
				y:0,
				width:function(d){return (self.scales.x(self.recessionDateParse(d.end))) - (self.scales.x(self.recessionDateParse(d.start)));},
				height:self.height
			});		
	},
	
	scaleMaker: function(){
		var self = this;							
    
		//create and draw the x axis
		self.xAxis = d3.svg.axis()
	    	.scale(self.scales[self.xOrY])
		    .orient("bottom")
		    .ticks(self[self.xOrY+"ScaleTicks"])
		    .tickPadding(8);
		
		//create and draw the y axis                  
		self.yAxis = d3.svg.axis()
	    	.scale(self.scales[self.yOrX])
		    .orient("left")
		    .ticks(self[self.yOrX+"ScaleTicks"])
		    .tickPadding(8);

		//change the tic size if it's sideways    
		if (self.horizontal){
			self.xAxis.tickSize(0 - self.height).tickPadding(12);
		}
		//forces a tick for every value on the x scale 
		if (self.tickAll){
			self.fullDateDomain = [];
			self.smallDateDomain = [];
			self.chartData.first().get("values").each(function (d,i){
				self.fullDateDomain.push(d.get("date"));
				if (i === 0 || i == self.dataLength - 1){
					self.smallDateDomain.push(d.get("date"));	
				}
			});
		}	
		if (self.xTickFormat){
			self.xAxis.tickFormat(self.xTickFormat);
		}	

		//FIX the tier thing needs rethought	
		if (self.chartLayout == "tier"){
			self[self.yOrX + "Axis"].ticks(2);		
		}

		//define the tick format if it's specified, change tick length if it's horizontal
		if (self.yTickFormat){
			self.yAxis.tickFormat(self.yTickFormat);
		}
		if (!self.horizontal){
			self.yAxis.tickSize(0-self.width);
		}else{
			self.yAxis.tickSize(0);
		}		 
		  			
		//if autoScale ing then let it use the default auto scale.  hasZoom and multiData automatically get auto-scaling
		if (self.yScaleVals && !self.hasZoom){	
			self[self.yOrX + "Axis"].tickValues(self.yScaleVals);
		}
		//draw all the axis
		self.svg.append("svg:g")
		    .attr("class", "x axis");		
	    self.svg.select(".x.axis")
	        .attr("transform", "translate(0," + self.height + ")")
	        .call(self.xAxis);
		self.svg.append("svg:g")
		    .attr("class", "y axis");			
	    self.svg.select(".y.axis")
	    	.call(self.yAxis); 

		self.adjustXTicks();

		if (!self.horizontal){
			self.svg.selectAll(".y.axis line")
				.attr("x1", -self.margin.left);
		}

		//get the latest labels
		self.dataLabels = self.YTickLabel[self.YTickLabel.length-1];
		self.topTick(self.dataLabels);
	},

	makeZeroLine:function (){
		var self = this;
		self.zeroLine = self.svg.append("line")
			.attr("class", "zeroAxis")
			.attr("clip-path", "url(#clip" + self.targetDiv + ")")
			.attr(self.xOrY + "1", function (){
				if (self.horizontal){return 0;}
				return -self.margin[self.leftOrTop];				
			})
			.attr(self.xOrY + "2", self[self.widthOrHeight])
			.attr(self.yOrX + "1", self.scales.y(0))
			.attr(self.yOrX + "2", self.scales.y(0));
	},
	
	topTick: function(tickLabels){
		var self = this;	

		d3.selectAll("#" + self.targetDiv + " .topTick").remove();

		var topTick =  $("#" + self.targetDiv + " ." + self.yOrX + ".axis .tick:last-of-type").find("text");
		var topTickHeight = topTick.height();
		if (topTickHeight === 0){
			topTickHeight = topTick[0].getBoundingClientRect().height;
		}
		
		d3.selectAll("#" + self.targetDiv + " ." + self.yOrX + ".axis .tick text")
			.attr("transform", "translate(0,-"+topTickHeight/2+")");

		var topTickHTML = topTick.text();
		var backLabel = "";
		if (self.horizontal){backLabel = tickLabels[1]; }
		topTick.text(tickLabels[0] +topTickHTML + backLabel);
		if (!self.horizontal){
			topTick.clone().appendTo(topTick.parent()).text(tickLabels[1]).css('text-anchor', "start").attr("class","topTick");
		}


	},
	
	toolTipMaker: function() {
		var self = this;

		self.baseElement = document.getElementById(self.targetDiv).querySelector('svg');
		self.svgFind = self.baseElement;		
		self.pt = self.svgFind.createSVGPoint();
		
		//start the cursor off to the left
		self.xPointCursor = 0 - self.margin[self.leftOrTop]-500;
		//add a line	
		self.cursorLine = self.svg.append('svg:line')
			.attr('class','cursorline')
			.attr("clip-path", "url(#clip" + self.targetDiv + ")")
			.attr(self.xOrY + '1', self.xPointCursor)
			.attr(self.xOrY + '2', self.xPointCursor)
			.attr(self.yOrX + '1',0)
			.attr(self.yOrX + '2',self[self.heightOrWidth]);	
				
		// tooltip divs, default turns em off.  They get turned on if you have no legend, or if you specifically turn them on.
		self.tooltip = d3.select("#" + self.chartDiv).append("div")
			.attr("class", "reuters-tooltip")
            .style({
		        opacity:0,
		        display:function(){
			        if (self.showTip || !self.hasLegend){
				        return "block";
			        }
			        return "none";
		        }
	        });            

		self.svgmove = self.svgFind.addEventListener('mousemove',function(evt){ return self.tooltipMover(evt); },false);
		self.svgtouch = self.svgFind.addEventListener('touchmove',function(evt){ return self.tooltipMover(evt); },false);
		self.svgout = self.svgFind.addEventListener('mouseout',function(evt){ return self.tooltipEnd(evt); },false);
		self.svgtouchout = self.svgFind.addEventListener('touchend',function(evt){ return self.tooltipEnd(evt); },false);

	},
	
	tooltipMover: function (evt, self){
		var self = this;
		self.loc = self.cursorPoint(evt);
		self.xPointCursor = self.loc[self.xOrY];
		self.yPointCursor = self.loc[self.yOrX];
		
		//little maths to figure out in the sideBySide layout what data point you are on.
		var widthsOver = 0;
		if (self.chartLayout == "sideBySide"){
			var eachChartWidth = (self[self.widthOrHeight] / self.numberOfObjects());
			for (i = 0; i < self.numberOfObjects;  i++ ){
				if ((self.xPointCursor - self.margin[self.leftOrTop]) > eachChartWidth){
					self.xPointCursor = self.xPointCursor - eachChartWidth;
					widthsOver = widthsOver + eachChartWidth;
				}
			}
		}
		if (self.chartLayout == "tier"){
			widthsOver = ((self.widthOfBar() * self.numberOfObjects()) / 2) - self.widthOfBar() / 2;
		}
		
		var toolTipModifier = 0;
		//use a reverse scale to figure out where you are at if there is a time scale.
		//if it's an ordinal scale it's a little trickier.
		self.closestData = null;				
		var indexLocation = self.xPointCursor - parseFloat(self.margin[self.leftOrTop]);

		if (self.hasTimeScale){
			self.locationDate = self.scales.x.invert(indexLocation);
			self.chartData.first().get("values").each(function(d,i){
				if (self.closestData === null || Math.abs(d.get("date") - self.locationDate) < Math.abs(self.closestData - self.locationDate)){
					self.closestData = d.get("date");
				}			
			});
			if (self.timelineData){
				self.closestData = null;				
				self.timelineData.forEach(function(d,i){
					if (self.closestData === null || Math.abs(d.closestDate - self.locationDate) < Math.abs(self.closestData - self.locationDate)){
						self.closestData = d.closestDate;
					}			
				});
			}
		}else{
			var closestRange = null;
			self.scales.x.range().forEach(function(d){
				if (closestRange === null || Math.abs(d-indexLocation) < Math.abs(closestRange - indexLocation)){
					closestRange = d;
				}					
			});
			var closestIndex = self.scales.x.range().indexOf(closestRange);
			self.closestData = self.scales.x.domain()[closestIndex];
			toolTipModifier = self.widthOfBar() / 2;
		}

		//Got the value, now let's move the line.
		self.cursorLine
			.attr(self.xOrY+'1', (self.scales.x(self.closestData)+toolTipModifier + widthsOver ))
			.attr(self.xOrY+'2', self.scales.x(self.closestData)+toolTipModifier + widthsOver);
	
		//highlight current bar
		self.highlightCurrent();
		
		//and now we can update the tooltip
		self.tooltip
			.html(function(d){
				return self.tipTemplate({self:self, data:self.makeTipData()});
			})
			.style(self.leftOrTop, function(d){
				var tipWidth = $("#" + self.targetDiv + " .reuters-tooltip").outerWidth();

				if (self.horizontal){
					tipWidth = $("#" + self.targetDiv + " .reuters-tooltip").outerHeight();
				}
				if (self.xPointCursor < (self.margin.left + self.width + self.margin.right) / 2){
					return self.margin[self.leftOrTop] + self.scales.x(self.closestData) + toolTipModifier + 15 + "px";
				}else{
					return self.scales.x(self.closestData) + toolTipModifier - tipWidth +15  + "px";
				}						
			})
			.style(self.topOrLeft, function(d){
				var toolTipHeight = $("#" + self.targetDiv + " .reuters-tooltip").height();
				if (self.horizontal){
					 toolTipHeight = $("#" + self.targetDiv + " .reuters-tooltip").outerWidth();
				}
				if (self.yPointCursor > (self.margin.top + self.height + self.margin.bottom) * 2 / 3){
					return self.yPointCursor - toolTipHeight -20 + "px";
				} 					
				if (self.yPointCursor < (self.margin.top + self.height + self.margin.bottom) / 3){
					return self.yPointCursor  + "px";
				}
					return self.yPointCursor - toolTipHeight/2 + "px";
			});
		
		//and now we can update the legend.
		if (self.hasLegend){				
			var legendData = self.makeTipData();			
			
			d3.select("#"+ self.legendDiv).selectAll(".valueTip")
				.data(legendData, function(d){ return d.name; })
				.html(function(d,i){
					if (self.chartLayout == "stackPercent"){
						return self.tipNumbFormat(d.y1Percent - d.y0Percent);
					}
					return self.tipNumbFormat(d[self.dataType]);
				});

			self.legendDate.html(function(){
				if (legendData[0].category){
					return legendData[0].category;
				}
				if (legendData[0].quarters){
                    return legendData[0].quarters;
                }				
				return legendData[0].displayDate;				
			});
						
			self.setLegendPositions();
		}
		
        self.tooltip.style({
	        opacity:1
        });

	},
	
	highlightCurrent:function(){
		var self = this;
		if (self.chartType == "bar"){
			self.barChart.selectAll(".bar")
				.classed("lighter", function(d){
					if (d.date == self.closestData || d.category == self.closestData){
						return false;		
					}
					return true;		
				});			
		}
		if (self.chartType == "line"){
			self.lineChart.selectAll(".tipCircle")
				.classed("highlight", function(d){
					if (d.date == self.closestData || d.category == self.closestData){
						return true;		
					}
					return false;
				});
		}			
	},
	
	makeTipData:function(){
		var self = this;
		var xDataType = "category";
		if (self.hasTimeScale){
			xDataType = "date";
		}
		var filtered = self.chartData.filter(function(d){
				return d.get("visible");
		});
		var tipData = [];
		filtered.forEach(function(d){
			var name = d.get("name");
			var displayName = d.get("displayName");
			var timeFormatter = d3.time.format("%m/%d/%Y");
			var matchingValues = d.get("values").filter(function(d){
				if (self.hasTimeScale){
					return timeFormatter(d.get(xDataType)) == timeFormatter(self.closestData);				
				}				
				return d.get(xDataType) == self.closestData;
			});	
			matchingValues.forEach(function(d){
				var matchObj = d.toJSON();
				_.extend(matchObj, matchObj[name]);
				matchObj.name = name;
				matchObj.displayName = displayName;
				tipData.push(matchObj);	
			});
			
		});
		return tipData;

	},

	cursorPoint: function (evt){
		var self = this;
		if ((evt.clientX)&&(evt.clientY)) {
			self.pt.x = evt.clientX; self.pt.y = evt.clientY;
		} else if (evt.targetTouches) {
			self.pt.x = evt.targetTouches[0].clientX; self.pt.y = evt.targetTouches[0].clientY;			
			self.pt.deltaX = Math.abs(self.pt.x - self.pt.lastX)
			self.pt.deltaY = Math.abs(self.pt.y - self.pt.lastY)
			if(self.pt.deltaX > self.pt.deltaY){
			  evt.preventDefault();				
			}
			self.pt.lastY = self.pt.y
			self.pt.lastX = self.pt.x
		}
		return self.pt.matrixTransform(self.svgFind.getScreenCTM().inverse());
	},

	tooltipEnd: function (evt){
		var self = this;
		self.cursorLine
			.attr(self.xOrY+'1', 0- self.margin[self.leftOrTop] -10 )
			.attr(self.xOrY+'2', 0-self.margin[self.leftOrTop]-10);
			
		self.tooltip
		.style("opacity", 0);
		
		if (self.hasLegend){
			self.legendItems.selectAll(".valueTip")			
				.html("<br>");

			self.legendDate.html("<br>");
 			self.setLegendPositions();
		}
		if (self.chartType == "bar"){
			self.barChart.selectAll(".bar")
				.classed("lighter", false);			
		}
		if (self.chartType == "line"){
			self.lineChart.selectAll(".tipCircle")
				.classed("highlight", false);			
		}
	},

	multiDataMaker: function() {
		var self = this;
		if (!self.multiDataColumns){
			return;
		}
		
		self.makeNav = d3.select("#"+self.targetDiv + " .chart-nav").append("div")
			.attr("class", "navContainer");
					
		self.makeNavLayoutButtons = self.makeNav.selectAll('.layoutNavButtons')
			.data(self.multiDataColumns)
			.enter()
			.append("div")
			.attr("class", "navButtons")
			.attr("dataid", function(d){
				return d;
			})		
			.html(function(d,i){
				return self.multiDataLabels[i];
			})
			.classed("selected", function(d,i){
				if (i == self.multiDataColumns.length-1){
					return true;
				}else{return false;}
			})	        
            .on("click", function(d,i) {
				if ($(this).hasClass("selected")){
					return;
				}

				//check if you've written out all the tick labels, if not, use just the first one.
				if (self.YTickLabel[i]){
					self.dataLabels = self.YTickLabel[i];
				}else{
					self.dataLabels = self.YTickLabel[0];					
				}

				var thisID = $(this).attr("dataid");
				$(this).addClass("selected").siblings().removeClass("selected");

				//this has to act differently if you're doing a data transform, or picking up totally different data.
				if (!self[thisID]){
					self.dataType = thisID;
				}else{
	    		    self.chartData = self[thisID];
	    		    self.flattenData(self.chartData);
				}

				self.update();
	        });
	        	   
	},

	chartLayoutMaker: function(){
		var self = this;
    	if (!self.chartLayoutLables){ 
	    	return;
    	}

		self.makeNavLayout = d3.select("#"+self.targetDiv + " .chart-layout").append("div")
			.attr("class", "layoutNavContainer");
					
		self.makeNavLayoutButtons = self.makeNavLayout.selectAll('.layoutNavButtons')
			.data(self.chartLayoutLables)
			.enter()
			.append("div")
			.attr("class", "layoutNavButtons")
			.attr("dataid", function(d){
				return d;
			})
			.style("background-position", function(d){
				//makes the sprite work.  i should change this to a class instead.
				var positionArray = ["basicbar", "stackTotalbar", "stackPercentbar", "sideBySidebar","tierbar","onTopOfbar","basicline", "stackTotalline", "stackPercentline","fillLinesline"];
				var positionNumber = positionArray.indexOf(d + self.chartType);
				return "0px " + ( - (positionNumber * 40)) + "px";
			})
			.classed("selected", function(d,i){
				if (i == self.chartLayoutLables.length - 1){
					return true;
				}else{return false;}
			})
            .on("click", function(d,i) {
				if ($(this).hasClass("selected")){
					return;
				}
				var thisID = $(this).attr("dataid");
				$(this).addClass("selected").siblings().removeClass("selected");
				
    		    self.chartLayout= d;
				
				//get the right data labels
				if (self.YTickLabel[i]){
					self.dataLabels = self.YTickLabel[i];
				}else{
					self.dataLabels = self.YTickLabel[0];					
				}				//and override them if it's stack percent
				if (self.chartLayout == "stackPercent"){
					self.dataLabels = ["","%"];
				}				

				//run the updater    		    
		    	self.update ();	
	        });
	},

	legendMaker: function() {	
		var self = this;
		//if no legend, get out of here.
		if(!self.hasLegend){
			return;
		}
		self.$legendEl.html(self.legendTemplate({data:self.jsonData, self:self}));

		self.legendItems = d3.selectAll("#"+self.legendDiv+' .legendItems')
			.data(self.jsonData)
			.on("click", function(d){
				var that = this;
				self.chartData.where({name:d.name}).forEach(function(d){
					if($(that).hasClass("clicked")){
						d.set({visible:true});
					}else{
						d.set({visible:false});
					}
				});
				if (self.multiDataColumns){
					self.multiDataColumns.forEach(function(data){
						self[data].where({name:d.name}).forEach(function(d){
							if($(that).hasClass("clicked")){
								d.set({visible:true});
							}else{
								d.set({visible:false});
							}
						});
					});					
				}

				$(this).toggleClass("clicked");									
				self.flattenData(self.chartData);				
				self.update ();  		
			});

		self.legendValues = d3.select("#"+ self.legendDiv).selectAll(".valueTip")
			.data(self.jsonData);
			
		self.legendDate = d3.selectAll("#"+self.legendDiv+' .dateTip');
		
		self.setLegendPositions();
	},

	setLegendPositions: function(){
		var self = this;

		if (!self.hasLegend){
			return;
		}
		var depth = 0;								
			
		self.legendItems
			.data(self.jsonData, function(d) {return d.name;})
			.style("top", function(d,i){					
					var returnDepth = depth;
					depth += $(this).height() + 5;
					return returnDepth+"px";	
			});
		self.legendItems
			.data(self.jsonData, function(d) {return d.name;})
			.exit()
			.style("top", function(d,i){					
					var returnDepth = depth;
					depth += $(this).height() + 5;
					return returnDepth + "px";	
			});

	},

	adjustXTicks:function(){
		var self = this;
 
		var ticksWidth = 0;
		$("#" + self.targetDiv + " .x.axis .tick").find("text").each(function(d){
			ticksWidth += $(this).width();
		});
		if (self.tickAll){
			self[self.xOrY+"Axis"].tickValues(self.fullDateDomain);			
		}

		if (ticksWidth > self.width){
			self[self.xOrY + "Axis"].ticks(2);

			if (self.tickAll){
				self[self.xOrY+"Axis"].tickValues(self.smallDateDomain);			
			}			
			
		self.svg.select(".x.axis")
			.transition()
	        .attr("transform", "translate(0," + self.height + ")")
	        .call(self.xAxis);
		}
	
	},

	baseUpdate: function(duration) {
		var self = this;
		self.trigger("baseUpdate:start");

		if (!duration){duration = 1000;}
		self.setWidthAndMargins();				
		self.setLegendPositions();
		self.barCalculations();

		
		self.svg.selectAll('.cursorline')
			.attr(self.yOrX + '1',0)
			.attr(self.yOrX + '2',self[self.heightOrWidth]);	
		
		d3.select("#"+self.targetDiv+" svg")
			.transition()
			.duration(duration)
			.attr({
				width:self.width + self.margin.left + self.margin.right,
				height:self.height + self. margin.top + self.margin.bottom				
			});
		
		self.svg
			.transition()
			.duration(duration)
			.attr("transform", "translate(" + self.margin.left + "," + self.margin.top + ")");  
		
		self.svg.select(".plot")
			.transition()
			.duration(duration)
			.attr({
				width:self.width,
				height:self.height
			});

		self.clip 			
			.transition()
			.duration(duration)
			.attr({
			    x: -self.margin.left,
			    y: -4,
			    width:self.width + self.margin.left + 8,
			    height:self.height +8
			});
		
		this.scales = {
			x: this.getXScale(),
			y: this.getYScale()
		};

		self.xAxis.scale(self.scales[self.xOrY]);

		self.yAxis.scale(self.scales[self.yOrX]);
		
		self[self.yOrX+"Axis"].tickSize(0-self[self.widthOrHeight]);
		
		if (self.chartLayout == "tier"){
			self[self.yOrX + "Axis"].ticks(2);		
		}else{
			self.yAxis.ticks(self[self.yOrX + "ScaleTicks"]);
			self.xAxis.ticks(self[self.xOrY + "ScaleTicks"]);
		}

		if (self.updateCount == 1){
			self.adjustXTicks();			
		}

		// update the axes,   
		self.svg.select(".x.axis")
			.transition()
			.duration(duration)
	        .attr("transform", "translate(0," + self.height + ")")
			.call(self.xAxis);					

		self.svg.select(".y.axis")
			.transition()
			.duration(duration)
			.call(self.yAxis)
			.each("end", function(d){
				if (self.updateCount === 0){
					self.updateCount++;
					setTimeout(function(){
						self.update();					
					}, 10); 
				}else{
					self.updateCount = 0;
				}
			});					


		if (!self.horizontal){
			self.svg.selectAll(".y.axis line")
				.attr("x1", "-"+self.margin.left);
		}
		
		//FIX - should be better x axis on the side by side
		if (self.chartLayout == "sideBySide"){
			self.svg.select("." + self.xOrY + ".axis")
				.style("display", "none");
		}else{
			self.svg.select("." + self.xOrY + ".axis")
				.style("display", "block");										
		}
		
		//fix, tier is all screwy, should just rethink
		if (self.chartLayout == "tier"){
		
			self.barChart
			.selectAll("." + self.yOrX + ".axis")
			.remove();
			
			self.barChart
				.append("svg:g")
			    .attr("class", self.yOrX + " axis")
			    .attr("transform", function(d){
					if (self.horizontal){
						return "translate(0," + self.height + ")";   
					}else{
						return "translate(0,0)";   
					}
			    });
			
		    self.barChart		    
		    	.data(self.chartData, function(d) { return d.name;})
		    	.selectAll("."+self.yOrX+".axis")
		    	.call(self[self.yOrX + "Axis"]); 
		    self.barChart.each(function(d){
			    var thisId = $(this).attr("id");
			    var barAxis = $("#"+thisId + " .axis").detach();
				barAxis.prependTo($(this));
		    });
	    }else{
		    //FIX what's up here?
/*
		    if (self.chartType == "bar"){
			    self.barChart.selectAll("." + self.yOrX + ".axis")
				    .remove();
			}
*/
	    }
		
		//update the top tick label
		self.topTick(self.dataLabels);


		//zero line
		if (self.zeroLine){
			self.zeroLine
				.transition()
				.duration(duration)
				.attr(self.xOrY + "1", function (){
					if (self.horizontal){return 0;}
					return "-" + self.margin[self.leftOrTop];				
				})
				.attr(self.xOrY + "2", self[self.widthOrHeight])
				.attr(self.yOrX+"1", self.scales.y(0))
				.attr(self.yOrX+"2", self.scales.y(0));			
		}

		
		//recessions				
		self.svg.selectAll(".recessionBox")
			.transition()
			.duration(duration)
			.attr({
				x: function (d) { return self.scales.x(self.recessionDateParse(d.start)); },
				width:function (d) { return (self.scales.x(self.recessionDateParse(d.end))) - (self.scales.x(self.recessionDateParse(d.start)));},
				height:self.height
			});

		if (self.zoom){
			self.zoom
		    	.x(self.scales.x)
			    .y(self.scales.y);
		}
		self.trigger("baseUpdate:end");
	//end of base update	
	},

	zoomChart: function (){
		var self = this;
		//if there is a zoom, then setup the zoom
		//define the zoom
		self.zoom = d3.behavior.zoom()
	    	.x(self.scales.x)
		    .y(self.scales.y)
		    .scaleExtent([1,8])
		    .on("zoom", zoomed);
	
		//call the zoom on the SVG
	    self.svg.call(self.zoom);
	
		//define the zoom function
		function zoomed() {		    	
	    	self.svg.select(".x.axis").call(self.xAxis);
		    self.svg.select(".y.axis").call(self.yAxis);

			if (!self.horizontal){
				self.svg.selectAll(".y.axis line")
					.attr("x1", -self.margin.left);
			}
	
			//get the latest labels
			self.dataLabels = self.YTickLabel[self.YTickLabel.length-1];
			self.topTick(self.dataLabels);


			if (self.chartType == "line"){
				self.lineChart
					.data(self.jsonData, function(d) {return d.name;})
			        .selectAll(".tipCircle")
			        .data( function(d) {return d.values;})
					.attr("cx", function(d,i){return self.scales.x(d.date);})
					.attr("cy",function(d,i){return self.scales.y(d[self.dataType]);});
					
				self.lineChart.selectAll(".line")
			        .data(self.jsonData, function(d) {return d.name;})
		        	.attr("d", function (d) { return self.line(d.values);});
	
				self.lineChart.selectAll(".area")
		        	.data(self.jsonData, function(d) {return d.name;})
			        .attr("d", function(d,i) { 
						return self.area(d.values); 
			         });
			}
			if (self.chartType == "bar"){

				self.svg.selectAll(".barChart")					
					.data(self.jsonData, function(d) { return d.name;})
					.selectAll(".bar")
					.data(function(d) {return d.values;})
					.attr(self.yOrX, function(d){ return self.yBarPosition(d); })
					.attr(self.heightOrWidth, function(d){ return self.barHeight(d); })
					.attr(self.widthOrHeight, function(d,i,j){ return self.barWidth(d,i,j); }) 
					.attr(self.xOrY, function (d,i,j){
						return self.xBarPosition(d,i,j);
					});	
			}
			


			self.zeroLine
				.attr(self.yOrX+"1", self.scales.y(0))
				.attr(self.yOrX+"2", self.scales.y(0));
								
			self.svg.selectAll(".recessionBox")
				.attr("x", function (d) {  return self.scales.x(self.recessionDateParse(d.start));})
				.attr("width", function (d) {return (self.scales.x(self.recessionDateParse(d.end))) - (self.scales.x(self.recessionDateParse(d.start)));});
		}													
	//end of zoom
	}
//end of view
});


Reuters = Reuters || {};
Reuters.Graphics = Reuters.Graphics || {};
Reuters.Graphics.LineChart = Reuters.Graphics.ChartBase.extend ({
	defaults: _.defaults({
		someNewDefault: "yes"
	}, Reuters.Graphics.ChartBase.prototype.defaults),
	//setup the scales.  You have to do this in the specific view, it will be called in the Reuters.Graphics.ChartBase.
	chartType:"line",
	xScaleMin:function(){
		return d3.min(this.jsonData, function(c) { return d3.min(c.values, function(v) { return v.date; }); });
	},
	xScaleMax:function(){
		return d3.max(this.jsonData, function(c) { return d3.max(c.values, function(v) { return v.date; }); });
	},
	getXScale: function() {
		return d3.time.scale()
			.domain([this.xScaleMin(),this.xScaleMax()])
			.range([0, this.width]);
	},
	yScaleMin:function(){
		var theValues = this.dataType;
		if (this.chartLayout == "stackTotal"){theValues = "stackTotal";}
		var min = d3.min(this.jsonData, function(c) { return d3.min(c.values, function(v) { return v[theValues]; }); });
		if (this.chartlayout == "fillLines"){ if (min > 0){min = 0;}}
		if (this.chartLayout == "stackTotal" || this.chartLayout == "stackPercent"){min = 0;}
		return min;
	},
	yScaleMax:function(){
		var theValues = this.dataType;
		if (this.chartLayout == "stackTotal"){theValues = "stackTotal";}
		var max = d3.max(this.jsonData, function(c) { return d3.max(c.values, function(v) { return v[theValues]; }); });
		if (this.chartLayout == "stackPercent"){max = 100;}
		return max;
	},
	getYScale: function() {
		var self = this;
		if (!self.yScaleVals || this.hasZoom){
			return d3.scale.linear()
				.domain([this.yScaleMin(),this.yScaleMax()])
				.nice(this.yScaleTicks)
				.range([this.height, 0]);
		}else{			
			return d3.scale.linear()
				.domain([this.yScaleVals[0],this.yScaleVals[this.yScaleVals.length - 1]])
				.nice(this.yScaleTicks)
				.range([this.height, 0]);
		}
	},
	renderChart: function (){
		// create a variable called "self" to hold a reference to "this"
		var self = this;
		
		if (self.hasZoom){
			self.zoomChart();		
		}
											
		//will draw the line		
		self.line = d3.svg.line()
	    	.x(function(d) { return self.scales.x(d.date); })
		    .y(function(d) {
		    	if (self.chartLayout == "stackTotal"){
		    		return self.scales.y(d.y1Total); 		    	
		    	}else {
			    	if (self.chartLayout == "stackPercent"){ return self.scales.y(d.y1Percent);}else{return self.scales.y(d[self.dataType]);}		
		    	}			    
		    })
			.interpolate (self.lineType)
			.defined(function(d) { return !isNaN(d[self.dataType]); });

		self.area = d3.svg.area()
	    	.x(function(d) { return self.scales.x(d.date); })
		    .y0(function(d) { 
		    	if (self.chartLayout == "stackTotal"){
		    		return self.scales.y(d.y0Total); 		    	
		    	}else {
			    	if (self.chartLayout == "stackPercent"){ return self.scales.y(d.y0Percent);}else{return self.scales.y(0);}
		    	}
		    })
		    .y1(function(d) {
		    	if (self.chartLayout == "stackTotal"){
		    		return self.scales.y(d.y1Total); 		    	
		    	}else {
			    	if (self.chartLayout == "stackPercent"){ return self.scales.y(d.y1Percent);}else{return self.scales.y(d[self.dataType]);} 		    				   		
		    	}
		     })
			.interpolate (self.lineType)
			.defined (function(d) { return !isNaN(d[self.dataType]); });

								          
		//bind the data and put in some G elements with their specific mouseover behaviors.
		self.lineChart = self.svg.selectAll(".lineChart")
			.data(self.jsonData, function(d) {return d.name; })
			.enter().append("g")
			.attr({
				"clip-path":"url(#clip" + self.targetDiv + ")",
				class: "lineChart",
				id:function(d){ return self.targetDiv + d.name + "-line"; }
			})
			.on("mouseover", function (d){			
				//put the line we've hovered on on top=
				self.lineChart.sort(function(a,b){
					if (a.name == d.name){
						return 1;
					}else{return -1;}
				}).order();
				
				//class all other lines to be lighter
				d3.selectAll("#" + self.targetDiv + " .lineChart")
					.classed('notSelected', true);
				d3.select(this)
					.classed("notSelected", false);				
			})
			.on("mouseout", function (d){
				d3.selectAll(".lineChart")
					.classed('notSelected', false);
			});

		self.lineChart.append("path")
			.attr("class", "line")
			.style("stroke", function(d) { return self.colorScale(d.name); })
			.attr("d", function(d) {return self.line(d.values[0]); })
			.transition()
			.duration(1500)
			.delay(function(d, i) { return i * 100; })
			.attrTween('d',function (d){
				var interpolate = d3.scale.quantile()
					.domain([0,1])
					.range(d3.range(1, d.values.length + 1));
				return function(t){
					return self.line(d.values.slice(0, interpolate(t)));
				};
			});			  				  	
		
		self.lineChart.append("path")
			.attr("class", "area")
			.style("fill", function(d) { return self.colorScale(d.name); })
			.attr("d", function(d) {return self.area(d.values[0]); })
			.style("display", function(d){
				if (self.chartLayout == "stackTotal" || self.chartLayout == "stackPercent" || self.chartLayout == "fillLines"){
					return "block";
				}else{return "none";}			      	
			})
			.transition()
			.duration(1500)
			.delay(function(d, i) { return i * 100; })
			.attrTween('d',function (d){
				var interpolate = d3.scale.quantile()
					.domain([0,1])
					.range(d3.range(1, d.values.length + 1));
				return function(t){
					return self.area(d.values.slice(0, interpolate(t)));
				};
			});									
				
		self.lineChart.selectAll(".tipCircle")
			.data( function(d) {return d.values;})
			.enter()
			.append("circle")
			.attr("class","tipCircle")
			.attr("cx", function(d,i){return self.scales.x(d.date);})
			.attr("cy",function(d,i){
		    	if (self.chartLayout == "stackTotal"){
		    		return self.scales.y(d.y1Total); 		    	
		    	}else {
			    	if (self.chartLayout == "stackPercent"){ 
				    	return self.scales.y(d.y1Percent);
				    }else{
					    return self.scales.y(d[self.dataType]);
					}		
				}
			})
			.attr("r",function (d,i) {
				if ( isNaN(d[self.dataType])){return 0;} 
				 return 5;
			})
			.style('opacity', function(d){
				if (self.markDataPoints){
					return 1;
				}
				return 0;
			})
			.style("fill", function(d) { return self.colorScale(d.name); })//1e-6
			.classed("timeline", function(d){
				if (self.timelineDataGrouped){
					if (self.timelineDataGrouped[self.timelineDate(d.date)]){
						return true;
					}					
				}
				return false
			});


		//add teh zero line on top.
		self.makeZeroLine();


		self.trigger("chart:loaded");

	//end chart render
	},
	update:function (){
		var self = this;			
				
		self.baseUpdate();
	
		self.exitLine = d3.svg.line()
			.x(function(d) { return self.scales.x(d.date); })
			.y(function(d) { return  self.margin.bottom+self.height+self.margin.top+10;})
			.interpolate (self.lineType);
	
		self.exitArea = d3.svg.area()
			.x(function(d) { return self.scales.x(d.date); })
			.y0(function(d) { return  self.margin.bottom+self.height+self.margin.top+10;})
			.y1(function(d) { return  self.margin.bottom+self.height+self.margin.top+10;})
			.interpolate (self.lineType);
	
		//exiting lines
		self.lineChart
			.data(self.jsonData, function(d) { return d.name;})
	        .exit()
			.selectAll(".line")
	        .transition()
	        .attr("d", function(d,i) { 
	      	    return self.exitLine(d.values); 
	         });
	
		//exiting area
		self.lineChart
			.data(self.jsonData, function(d) { return d.name;})
	        .exit()
			.selectAll(".area")
	        .transition()
	        .attr("d", function(d,i) { 
	      	    return self.exitArea(d.values); 
	         });			        
	         
	    self.lineChart
			.data(self.jsonData, function(d) { return d.name; } )
			.exit()
			.selectAll(".tipCircle")
			.transition()
			.attr("r",0);
	
		//update the line				    
	    self.lineChart.selectAll(".line")
	        .data(self.jsonData, function(d) {return d.name;})
	        .transition()
	        .duration(1000)
	        .attr("d", function(d,i) { 
	      	    return self.line(d.values); 
	         });
		
		//update the area				    
	    self.lineChart.selectAll(".area")
	        .data(self.jsonData, function(d) {return d.name;})
	        .style("display", function(d){
		      	if (self.chartLayout == "stackTotal" || self.chartLayout == "stackPercent" || self.chartLayout == "fillLines"){
				  	return "block";
			  	}else{return "none";}			      	
	      	})
	        .transition()
	        .duration(1000)
	        .attr("d", function(d,i) { 
	      	    return self.area(d.values); 
	         });
		
		//the circles      
		self.lineChart
			.data(self.jsonData, function(d) {return d.name;})
	        .selectAll(".tipCircle")
	        .data( function(d) {return d.values; })
	        .transition()
	        .duration(1000)
			.attr("cy",function(d,i){
		    	if (self.chartLayout == "stackTotal"){
		    		return self.scales.y(d.y1Total); 		    	
		    	}else {
			    	if (self.chartLayout == "stackPercent"){ 
				    	return self.scales.y(d.y1Percent);
				    }else{
					    return self.scales.y(d[self.dataType]);
					}		
				}
			})
		    .attr("cx", function(d,i){return self.scales.x(d.date);})
			.attr("r",function (d,i) {
				if ( isNaN(d[self.dataType])){return 0;} 
				 return 5;
			});
		    
		self.lineChart
			.data(self.jsonData, function(d) {return d.name;})
	        .selectAll(".tipCircle")
	        .data( function(d) {return d.values; })
	        .exit()
	        .transition()
	        .duration(1000)
		    .attr("r",0)
		    .each("end", function(d){
			    d3.select(this).remove();
		    });

		self.lineChart
			.data(self.jsonData, function(d) {return d.name;})
	        .selectAll(".tipCircle")
	        .data( function(d) {return d.values; })
	        .enter()
			.append("circle")
			.attr("class","tipCircle")
			.attr("cx", function(d,i){return self.scales.x(d.date);})
			.attr("cy",function(d,i){
		    	if (self.chartLayout == "stackTotal"){
		    		return self.scales.y(d.y1Total); 		    	
		    	}else {
			    	if (self.chartLayout == "stackPercent"){ 
				    	return self.scales.y(d.y1Percent);
				    }else{
					    return self.scales.y(d[self.dataType]);
					}		
				}
			})			
			.style('opacity', function(d){
				if (self.markDataPoints){
					return 1;
				}
				return 0;
			})
			.style("fill", function(d) { return self.colorScale(d.name); })//1e-6		    					 								 					
		    .attr("r",0)
	        .transition()
	        .duration(1000)
			.attr("r",function (d,i) {
				if ( isNaN(d[self.dataType])){return 0;} 
				 return 5;
			});    					 								 						  		
				 
	//end of update
	}
//end model
});
Reuters = Reuters || {};
Reuters.Graphics = Reuters.Graphics || {};
//the view that constructs a barChart  data, get, models
Reuters.Graphics.BarChart = Reuters.Graphics.ChartBase.extend({
	defaults: _.defaults({
		someNewDefault: "yes"
	}, Reuters.Graphics.ChartBase.prototype.defaults),
	//setup the scales
	chartType:"bar",
	
	xScaleMin:function(){
		return d3.min(this.jsonData, function(c) { return d3.min(c.values, function(v) { return v.date; }); });
	},
	
	xScaleMax:function(){
		return d3.max(this.jsonData, function(c) { return d3.max(c.values, function(v) { return v.date; }); });
	},
	
	xScaleRange:function(){
		var objectNumber = this.numberOfObjects();
		if (this.chartLayout == "stackPercent" ||  this.chartLayout == "stackTotal"){objectNumber = 1;}
		var range = [(this.widthOfBar() * objectNumber) / 2, this[this.widthOrHeight] - this.widthOfBar() * objectNumber];
		if (this.chartLayout == "sideBySide"){
			range = [0, (this[this.widthOrHeight]/(this.jsonData.length * (1 + (2 / (this.jsonData[0].values.length) ) ) ) )];
		}
		return range;
	},
	
	getXScale: function() {
		if (this.hasTimeScale){
				return d3.time.scale()
					.domain([this.xScaleMin(),this.xScaleMax()])
					.range(this.xScaleRange());
			}else{
				return d3.scale.ordinal()
				.domain(this.jsonData[0].values.map(function(d) { return d.category;}))
				.rangeRoundBands([0, this[this.widthOrHeight]], 0);
			}
	},
	
	yScaleMin:function(){
		var theValues = this.dataType;
		if (this.chartLayout == "stackTotal"){theValues = "stackMin";}
		var min = d3.min(this.jsonData, function(c) { return d3.min(c.values, function(v) {return v[theValues]; }); });
		if (this.chartLayout == "stackPercent"){min = 0;}
		if (min > 0){min = 0;}
		return min;		
	},
	
	yScaleMax:function(){
		var theValues = this.dataType;
		if (this.chartLayout == "stackTotal"){theValues = "stackTotal";}
		var max = d3.max(this.jsonData, function(c) { return d3.max(c.values, function(v) { return v[theValues]; }); });
		if (this.chartLayout == "stackPercent"){max = 100;}
		if (max < 0){ max = 0;}
		return max;
	},
	
	yScaleRange: function(){
		var fullHeight = this[this.heightOrWidth];
		if (this.chartLayout == "tier"){
			fullHeight = (this[this.heightOrWidth]/(this.jsonData.length * (1 + (2 / (this.jsonData[0].values.length) ) ) ) );
		}
		var rangeLow = fullHeight;
		var rangeHigh = 0;
		if (this.horizontal){
			rangeLow = 0;
			rangeHigh = fullHeight ;
		}
		return [rangeLow,rangeHigh];		
	},
	
	getYScale: function() {		
		if (!this.yScaleVals || this.hasZoom){
			return d3.scale.linear()
				.domain([this.yScaleMin(),this.yScaleMax()])
				.nice(this.yScaleTicks)
				.range(this.yScaleRange());
		}else{			
			return d3.scale.linear()
				.domain([this.yScaleVals[0],this.yScaleVals[this.yScaleVals.length - 1]])
				.range(this.yScaleRange());
		}
	},
									
	xBarPosition:function(d, i, j) {
		var self = this;
		var theScale = 'category';
		var modifier = 0; 
		if (self.hasTimeScale) {
			theScale = 'date';
			modifier = (self.widthOfBar() * self.numberOfObjects() / 2);
		}			
		if (self.chartLayout == "stackTotal" || self.chartLayout == "stackPercent" || self.chartLayout == "sideBySide" || self.chartLayout == "tier"){
			if (self.hasTimeScale){ 
				modifier = (self.widthOfBar()/2);
				if (self.chartLayout =="sideBySide"){modifier = 0;}
			}
			return (self.scales.x(d[theScale])) - modifier;
		}else{
			if (self.chartLayout == "onTopOf"){
				return (self.scales.x(d[theScale]) - modifier)+((self.widthOfBar()/(j+1))*j/2);  
			}else{
				return ((self.scales.x(d[theScale]) - (j * self.widthOfBar())) + (self.widthOfBar() * (self.numberOfObjects() - 1))) - modifier;
			}
		}
	},
	
	yBarPosition:function(d){
		var self = this;
		if ( isNaN(d[self.dataType])){
			return 0;				
		}
		var positioner = "y1";
		if (self.horizontal || d.y1Total < 0 ){ positioner = "y0";}
		if (self.horizontal && d.y1Total < 0 ){ positioner = "y1";}
		if (self.chartLayout == "stackTotal"){ 
			return self.scales.y(d[positioner + "Total"]);
		}else{
			if (self.chartLayout == "stackPercent"){
				return self.scales.y(d[positioner + "Percent"]);					
			}else{
			 	var minOrMax = "max";
		 	  	if (self.horizontal){
			 	  	minOrMax = "min";
		 	  	}
		 	  	return self.scales.y(Math[minOrMax](0, d[self.dataType])); 
		 	}				
		}
	},
	
	barHeight: function(d){
		var self = this;
		if ( isNaN(d[self.dataType])){
			return 0;				
		}
		if (self.chartLayout == "stackTotal"){ 
			return Math.abs(self.scales.y(d.y0Total) - self.scales.y(d.y1Total));
		}else{
			if (self.chartLayout == "stackPercent"){
				return Math.abs(self.scales.y(d.y0Percent) - self.scales.y(d.y1Percent));
			}else{
				return Math.abs(self.scales.y(d[self.dataType]) - self.scales.y(0));
			}									
		}
	},
	
	barFill:function (d){
		var self = this;
		if (self.colorUpDown){
			if (d[self.dataType] > 0){
				return self.colorScale.range()[0];
			}else{
				return self.colorScale.range()[1];
			}					  						  	
		}else{
			return self.colorScale(d.name);
		}
	},
	
	barWidth:function (d,i,j){
		var self = this;
		if (self.chartLayout == "tier"){
			return self.widthOfBar() * self.numberOfObjects();
		}
		if (self.chartLayout == "onTopOf"){
			return (self.widthOfBar()) / (j + 1);
		}else{
			return self.widthOfBar();
		}			
	},	
	
	renderChart: function (){
		var self = this;
		self.trigger("renderChart:start");
		
		if (self.hasZoom){
			self.zoomChart();		
		}
		//enter g tags for each set of data, then populate them with bars.  some attribute added on end, for updating reasons
		self.barChart = self.svg.selectAll(".barChart")
			.data(self.jsonData, function(d) { return d.name;})
			.enter().append("g")
		  	.attr("clip-path", "url(#clip" + self.targetDiv + ")")
			.attr("class", "barChart")
			.attr('id',function(d){ return self.targetDiv + d.name + "-bar"; });
		
		if (self.chartLayout == "sideBySide"){
			self.barChart.attr("transform", function(d,i){
				if (!self.horizontal){
					return 	"translate(" + (i * (self[self.widthOrHeight] / self.numberOfObjects())) + ",0)";				  	
				}else{
					return 	"translate(0," + (i * (self[self.widthOrHeight] / self.numberOfObjects())) + ")";				  						
				}
			});
		}
		if (self.chartLayout == "tier"){
			self.barChart.attr("transform", function(d,i){
				if (!self.horizontal){
					return 	"translate(0," + (i * (self[self.heightOrWidth] / self.numberOfObjects())) + ")";				  						
				}else{
					return 	"translate(" + (i * (self[self.heightOrWidth] / self.numberOfObjects())) + ",0)";				  	
				}
			});
		}

		self.barChart.selectAll(".bar")
			.data(function(d) {return d.values;})
			.enter().append("rect")
			.attr("class", "bar")
			.style("fill", function(d){ return self.barFill(d); })
			.attr(self.heightOrWidth, 0)
			.attr(self.yOrX, self.scales.y(0))
			.attr(self.widthOrHeight, function(d,i,j){ return self.barWidth(d,i,j); }) 
			.attr(self.xOrY, function (d,i,j){					  					  				  	
				return self.xBarPosition(d,i,j);
			})
			.transition()
			.duration(1000)
			.attr(self.yOrX, function(d){ return self.yBarPosition(d); })
			.attr(self.heightOrWidth, function(d){ return self.barHeight(d); });

		if (self.chartLayout =="sideBySide"){
			self.svg.select("." + self.xOrY + ".axis")
				.style("display", "none");					
		}else{
			self.svg.select("." + self.xOrY + ".axis")
				.style("display", "block");										
		}

		if (self.chartLayout == "tier"){
			self.barChart
				.append("svg:g")
			    .attr("class", self.yOrX + " axis")
			    .attr("transform", function(d){
					if (!self.horizontal){
						return "translate(0," + self.height + ")";   
					}else{
						return "translate(0,0)";   
					}
			    });
			
		    self.barChart.selectAll("."+self.yOrX+".axis")
		    	.call(self[self.yOrX + "Axis"]); 
		    self.barChart.each(function(d){
			    var thisId = $(this).attr("id");
			    var barAxis = $("#"+thisId + " .axis").detach();
				barAxis.prependTo($(this));
		    });
	    }else{
		    self.barChart.selectAll("." + self.yOrX + ".axis")
			    .remove();
	    }


		//add teh zero line on top.
		self.makeZeroLine();
		self.trigger("renderChart:end");
		self.trigger("chart:loaded");
				
	//end of render
	},
	update: function (){
		var self = this;
		self.baseUpdate();

		self.trigger("update:start");

		self.barChart
			.data(self.jsonData, function(d) {return d.name;})
			.order()
			.transition()
			.duration(1000)
			.attr("transform", function(d,i){
				var xPosit = 0;
				var yPosit = 0;
				if (self.chartLayout == "sideBySide"){
					if (!self.horizontal){
						xPosit = (i*(self[self.widthOrHeight]/self.numberOfObjects()));
					}else{
						yPosit = (i*(self[self.widthOrHeight]/self.numberOfObjects()));
					}
				}
				if (self.chartLayout == "tier"){
					if (!self.horizonta){
						yPosit = (i*(self[self.heightOrWidth]/self.numberOfObjects()));
					}else{
						xPosit = (i*(self[self.heightOrWidth]/self.numberOfObjects()));
					}
				}
				return 	"translate(" + xPosit + ","+yPosit+")";				  	
			});

		self.barChart
			.data(self.jsonData, function(d) { return d.name;})
			.exit()
			.selectAll(".bar")
			.transition()
			.attr(self.heightOrWidth, 0)
			.attr(self.yOrX, self.scales.y(0));
					
		self.svg.selectAll(".barChart")					
			.data(self.jsonData, function(d) { return d.name;})
			.selectAll(".bar")
			.data(function(d) {return d.values;})
			.transition()
			.duration(1000)
			.style("fill", function(d){ return self.barFill(d); })
			.attr(self.yOrX, function(d){ return self.yBarPosition(d); })
			.attr(self.heightOrWidth, function(d){ return self.barHeight(d); })
			.attr(self.widthOrHeight, function(d,i,j){ return self.barWidth(d,i,j); }) 
			.attr(self.xOrY, function (d,i,j){
				return self.xBarPosition(d,i,j);
			});	
			
		self.svg.selectAll(".barChart")					
			.data(self.jsonData, function(d) { return d.name;})
			.selectAll(".bar")
			.data(function(d) {return d.values;})
			.exit()
			.transition()
			.attr(self.heightOrWidth, 0)
			.attr(self.yOrX, self.scales.y(0))
			.each("end", function(d){
				d3.select(this).remove();
			});			
			
		self.barChart.selectAll(".bar")
			.data(function(d) {return d.values;})
			.enter().append("rect")
			.attr("class", "bar")
			.style("fill", function(d){ return self.barFill(d); })
			.attr(self.heightOrWidth, 0)
			.attr(self.yOrX, self.scales.y(0))
			.attr(self.widthOrHeight, function(d,i,j){ return self.barWidth(d,i,j); }) 
			.attr(self.xOrY, function (d,i,j){					  					  				  	
				return self.xBarPosition(d,i,j);
			})
			.transition()
			.duration(1000)
			.attr(self.yOrX, function(d){ return self.yBarPosition(d); })
			.attr(self.heightOrWidth, function(d){ return self.barHeight(d); });

		self.trigger("update:end");				        
	//end of update
	}
	
//end of mdoel
});


$(document).ready(function(){
	Reuters = Reuters || {};
	Reuters.Graphics = Reuters.Graphics || {};
	var hasPym = false;
	try {
		var pymChild = new pym.Child({polling:500});
		if (pymChild.id) {
			hasPym = true;
			$("section.content.reuters-graphics").addClass("pym")
		}
	}
	catch(err){	
	}
	
	$('ul.nav li a').on('click', function(event){
		
		event.preventDefault();
	
		$('body, html').animate({ scrollTop: 0 });
    	
		var $el = $(this);
	
        var id = $el.attr('href');
		
		id = id.replace("#","")
		route(id);	
	});

	var offsetTop = 108;

	function sticky_relocate() {
	    var window_top = $(window).scrollTop();
	    var div_top = $('#sticky-anchor').offset().top-70;
	    if (window_top > div_top) {
	        $('#sticky').addClass('stick');
	    } else {
	        $('#sticky').removeClass('stick');
	    }
	}
		
	$(function () {
	    $(window).scroll(sticky_relocate);
	    sticky_relocate();
	});
		

   function route(id){
   		   				
		var $el = $( "a[href='#"+id+"']" ).parent()
	
		var title = $( "a[href='#"+id+"']" ).html()
		if( $el.hasClass('active') ){
            return;
        }	
		d3.select("#section-label")
			.html(title)
		
		
		$el.addClass('active').siblings().removeClass('active');
		$("#navbar").collapse('hide')

	
        $('section.graphic-section.selected').removeClass('selected');		
			$("#"+id).addClass('selected');							
			if (hasPym == true) {
					pymChild.sendHeight()											
			}		
			

		clickRouter.updateRoute(id);

   }


	//router
	var buttonRouter = Backbone.Router.extend({
		routes: {
			"section-:id":"changeSection",
		},
		changeSection:function(id){			
			
			route(id);		
		},
		updateRoute:function(id){
			this.navigate("section-"+id);	
		},
	});
	//does it matter where this goes?
	var clickRouter = new buttonRouter();
	
	Backbone.history.start();

	
		

/*
		Reuters.Graphics.sharePrice = new Reuters.Graphics.LineChart({
			el: "#reutersGraphic-chart",
//			dataURL: 'http://sfb-proxy-prod-1197393060.us-east-1.elb.amazonaws.com/json/mw-disney-earns',
			dataURL:"data/data.csv",
			height:.5, //if < 10 - ratio , if over 10 - hard height.  undefined - square
//			columnNames:{sandp:"S&P 500", disney:"Disney"}, // undefined uses sheet headers, object will map, array matches columnNamesDisplay
//			colors: [blue3, purple3,orange3, red3,yellow3],  //array or mapped object
//			dataType:'value',//value, changePreMonth, CumulativeChange, percentChange, cumulate
//			YTickLabel: [["","%"]], //  \u00A0  - use that code for a space.
//			xScaleTicks: 5,
//			yScaleTicks:5,
//			dateFormat: d3.time.format("%b %Y"),
//			numbFormat: d3.format(",.1f"),
//			divisor:1000,

//			columnNamesDisplay:["Bob","Jerry"], // only use this if you are using an array for columnNames
//			colorUpDown:true,
//			hasLegend: false,
//			showTip:false,
//			yScaleVals: [0,100],
//			tickAll:true, //if you make tickAll anything, it will put a tick for each point.
//			horizontal:true,
//			margin: {top: 60, right: 80, bottom: 60, left: 130},
//			groupSort:"ascending", // ascending descending or array
//			categorySort:"ascending", //ascending descending, array or alphabetical
//			parseDate:d3.time.format("%d/%m/%y").parse // can change the format of the original dates
//			hasRecessions: true,
//			hasZoom: true,
//			dataStream:true,
//			timelineData:"data/timeline.csv", //dates much match source dates 
//			tipNumbFormat: function(d){
//				var self = this;
//				if (isNaN(d) === true){return "N/A";}else{
//					return self.dataLabels[0] + self.numbFormat(d) + " " + self.dataLabels[1] ;				
//				}				
//			},
//			lineType: "linear",//step-before, step-after
//			chartBreakPoint:400, //when do you want the legend to go up top
//			markDataPoints:true,
//			multiDataColumns:["gpd","unemployment"],//can use value,changePreMonth, CumulativeChange, percentChange
//			multiDataLabels:["VALUE","PERCENT"],
//			chartLayout:"stackPercent", // basic,stackTotal, stackPercent, fillLines, sideBySide, onTopOf,
//			chartLayoutLables:["stackPercent", "basic","stackTotal","fillLines"], //define this, and buttons appear
//			yTickFormat:function(d){
//				var numbFormat = d3.format(".2f")
//				return numbFormat(d)
//			},
//			xTickFormat:function(d){
//				var dateFormat = d3.time.format("%b %Y")
//				return dateFormat(d)
//			},
//			navSpacer:true,
		});
*/
		

		
		
			
		$(".slide-top-item").on("click", function(event){
			var parent = $(this).parent()
			if (parent.hasClass("opened")){
				parent.toggleClass("opened")
				return
			}				
			$(".slide-down-item").removeClass("opened")
			parent.addClass("opened")															
		})
		
	
		

		

		

		

		
		
					
});

$(window).load(function() {
  

    d3.select("body")
    	.style("visibility", "visible");
    
    try {
		pymChild.sendHeight()
	}
	catch(err){	
	}
	
});
