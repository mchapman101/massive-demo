SELECT
  incidents.id,
  incidents.us_state,
  injuries.name as injuries_name,
  affected_areas.name as affected_areas_name,
  causes.name as causes_name
FROM incidents
join  injuries on incidents.injury_id = injuries.id
join causes on incidents.cause_id = causes.id
join affected_areas on injuries.affected_area_id = affected_areas.id;
