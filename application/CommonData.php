<?php
namespace app;

class CommonData{

    static private $data=array();

    static public function setVar($k, $v){
        self::$data[$k] = $v;
    }

    static public function getVar( $k ){
        if(isset(self::$data[$k] )){
            return self::$data[$k];
        }
        return null;
    }

}