<?php

class Person
{
    public $nama;
    public $alamat;
    public $jurusan;

    public function setNama($data)
    {
        $this->nama = $data;
    }

    public function getNama()
    {
        return $this->nama;
    }
}

$mahasiswa = [
      ['nama'=>'Beryll Pradana Ramadhan',
        'jurusan'=>'informatika'
      ]      
];

foreach ($mahasiswa as $nhs){
    
}


$beryll = new Person();
$beryll->setNama ='Beryll Pradana Ramadhan';
echo $beryll->getNama();
echo '<br>';

$ismail = new Person();
$ismail->setNama ='Ismail Marjuki';
echo $ismail->getNama();