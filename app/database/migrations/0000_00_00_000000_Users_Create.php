<?php

use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class UsersCreate extends Migration {

	/**
	 * Run the migrations.
	 *
	 * @return void
	 */
	public function up()
	{
		Schema::create('users', function(Blueprint $table)
		{
			$table->increments('id');
            $table->string('email', 255)->unique();
            $table->string('password', 60);
            $table->string('firstname', 100);
            $table->string('lastname', 100);
            $table->string('remember_token', 100)->nullable()->default(null);
            $table->boolean('active')->default(false);
            $table->string('reset_token', 100)->nullable()->default(null);
			$table->timestamps();
		});
	}

	/**
	 * Reverse the migrations.
	 *
	 * @return void
	 */
	public function down()
	{
		Schema::drop('users');
	}

}
