<?php

namespace App\Policies;

use App\Models\Post;
use App\Models\User;
use Illuminate\Auth\Access\HandlesAuthorization;

class PostPolicy
{
    use HandlesAuthorization;

    /**
     * Create a new policy instance.
     *
     * @return void
     */
    public function show(?User $user , Post $post)
    {
        return $post->published === true;
    }

    public function before(?User $user){
        if($user){
            return true;
        }else{
           return null; 
        }
    }
}
