# 81-MongoDB-Models
## MongoDB Models
### Author: Rohith Dhand
[MongoDB Models](https://youtu.be/_gjo7GZznZg?list=PLOghUv2IDLKFLRmiz_3MN6wMTN8LmGML_&t=232)
### Queries
```` sql
-- Create Temporary Table #CloudSales
CREATE TABLE #CloudSales
(
	CloudProvider VARCHAR(50), year int, collection money
)
go
--Populate sample records
insert into #CloudSales values('AWS',2015,10000)
insert into #CloudSales values('AWS',2015,5000)
insert into #CloudSales values('Azure',2015,5000)
insert into #CloudSales values('Azure',2015,8000)
insert into #CloudSales values('AWS',2016,8000)
insert into #CloudSales values('AWS',2016,4000)
insert into #CloudSales values('Azure',2016,6000)
insert into #CloudSales values('Azure',2016,4000)
GO

SELECT * from #CloudSales;
/* OUTPUT
CloudProvider	year	collection
AWS				2015	10000.00
AWS				2015	10000.00
AWS				2015	5000.00
Azure			2015	5000.00
Azure			2015	8000.00
AWS				2016	8000.00
AWS				2016	4000.00
Azure			2016	6000.00
Azure			2016	4000.00
*/

-- 1 Method
SELECT * from #CloudSales
Pivot(sum(Collection)
	For CloudProvider in (AWS, Azure)
) as PivtTable;
/* OUTPUT
year	AWS			Azure
2015	25000.00	13000.00
2016	12000.00	10000.00
*/

SELECT * from #CloudSales
Pivot(sum(Collection)
	For Year in ([2015], [2016])
) as PivtTable;
/* OUTPUT
CloudProvider	2015		2016
AWS				25000.00	12000.00
Azure			13000.00	10000.00
*/
````

