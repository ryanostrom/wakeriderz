<?php

include_once 'Config.php';

class Repo {
	public function __construct()
	{
		$config = new Config();
		$config = $config->getDb();
		$this->link = new mysqli($config['host'], $config['username'], $config['password'], $config['db']);
	}

	public function buildSql($properties = array())
	{
		$select = implode(', ', $properties['columns']);
		return <<<SQL
			SELECT {$select}
 			  FROM {$properties['table']}
  			 WHERE {$properties['table']}.{$properties['index']} = '{$properties['value']}'
SQL;
	}

	public function getArray($sql)
	{
		$data = array();
		if ($result = mysqli_query($this->link, $sql)) {
			while ($row = $result->fetch_assoc()) {
				$data[] = $row;
			}
		}

		return $data;
	}

	public function getArraySingle($sql)
	{
		$data = array();
		if ($result = mysqli_query($this->link, $sql)) {
			while ($row = $result->fetch_assoc()) {
				$data[] = $row;
			}
		}

		if (!empty($data)) {
			$temp_data = $data[0];
			$data = array();
			foreach ($temp_data as $key => $value) {
				$data[$key] = $value;
			}
		}

		return $data;
	}

	public function setSql($sql)
	{
		return mysqli_query($this->link, $sql);
	}

	public function setCreate($params) {
	  $sql = <<<SQL
	    INSERT INTO task_item (date_id, client_id, value) VALUES 
SQL;

	  $params = array_map(function($param) {
	    return "({$param['date_id']}, {$param['client_id']}, '{$param['value']}')";
	  }, $params);

	  return $sql . implode(',', $params);
	}

	public function setUpdate($params) {
	  $sql = <<<SQL
	    UPDATE task_item
	       SET value = CASE id
SQL;

	  $params = array_map(function($param) {
	    return "WHEN {$param['id']} THEN '{$param['value']}'";
	  }, $params);

	  return $sql . implode(' ', $params) . 'END';
	}

	public function setDelete($params) {
	  $ids = implode(',', array_map(function($param) {
	    return $param['id'];
	  }, $params));

	  $sql = <<<SQL
	    DELETE
	      FROM task_item
	     WHERE id IN ({$ids})
SQL;
	}
}

?>