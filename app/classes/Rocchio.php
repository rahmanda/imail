<?php
class Rocchio {
        protected $dictionary = array();
        protected $documents = array(); 
        protected $classes = array();
        protected $docToClass = array();
        protected $docCount = 0;
        protected $centroids = array();
        protected $results = array();

        public function addDocument($document, $class) {
                preg_match_all('/\w+/', $document, $matches); 
                $docID = ++$this->docCount;
                $this->classes[$class][] = $docID;
                $this->docToClass[$docID] = $class;
                
                foreach($matches[0] as $match) {
                        $match = strtolower($match);
                        if(!isset($this->dictionary[$match])) {
                                $this->dictionary[$match] =0; 
                        } 
                        if(!isset($document[$docID][$match])) {
                                $this->dictionary[$match]++;
                                $this->documents[$docID][$match] = 0;
                        }

                        $this->documents[$docID][$match]++;
                }
        }

        public function test($document, $testClass) {
                $document = $this->linearise($document);

                foreach($this->centroids as $class => $terms) {
                        $score[$class] = 0;
                        foreach($terms as $term => $termScore) {
                                if(isset($document[$term])) {
                                        $score[$class] += $termScore * 
                                                (log($document[$term], 2) +
                                                (log($this->docCount 
                                                        / $this->dictionary[$term], 2)));
                                }
                        }
                }

                arsort($score); 
                $result = key($score); 
                
                if($result == $testClass) {
                        $this->results['true'][$result] += 1;
                } else {
                        $this->results['false'][$result] += 1;
                }
        }

        public function train() {
                foreach($this->classes as $class => $documents) {
                        $classCount = count($this->classes[$class]);
                        $total = 0;
                        foreach($documents as $docID) {
                                $terms = $this->documents[$docID];
                                foreach($terms as $term => $count) { 
                                        $score =
                                                 (1 / $classCount) *
                                                ( log($count, 2) 
                                                + log($this->docCount 
                                                        / $this->dictionary[$term], 2));
                                        $this->centroids[$class][$term] += $score;
                                        $total += $score;
                                }
                        }
                        $this->centroids[$class] = 
                                $this->normalise($this->centroids[$class], $total);
                }
        }
        
        public function getStats() {
                // fancy output is for suckers.
                var_dump($this->results);
        }
        
        protected function linearise($input) {
                preg_match_all('/\w+/', $input, $matches); 
                $document = array();
                foreach($matches[0] as $match) {
                        $match = strtolower($match);
                        if(!isset($document[$match])) {
                                $document[$match] = 0;
                        }
                        $document[$match]++;
                }
                return $document;
        }

        protected function normalise($vector, $total) {
                foreach($vector as &$value) {
                        $value = $value/$total;
                }
                return $vector;
        }
}