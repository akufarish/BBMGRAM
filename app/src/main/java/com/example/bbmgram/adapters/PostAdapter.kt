package com.example.bbmgram.adapters

import android.content.Context
import android.view.LayoutInflater
import android.view.ViewGroup
import androidx.recyclerview.widget.RecyclerView
import com.example.bbmgram.databinding.PostsItemBinding
import com.example.bbmgram.models.Posts

class PostAdapter(
    private val dataPost: ArrayList<Posts>,
    private val context: Context
): RecyclerView.Adapter<PostAdapter.ViewHolder>() {
    class ViewHolder(val binding: PostsItemBinding): RecyclerView.ViewHolder(binding.root) {

    }

    override fun onCreateViewHolder(parent: ViewGroup, viewType: Int): ViewHolder {
        val binding = PostsItemBinding.inflate(LayoutInflater.from(context), parent, false)
        return ViewHolder(binding)
    }

    override fun getItemCount(): Int {
        return dataPost.size
    }

    override fun onBindViewHolder(holder: ViewHolder, position: Int) {
        val currentItem = dataPost[position]
        holder.binding.profile.setImageResource(currentItem.profilePict)
        holder.binding.username.text = currentItem.username
        holder.binding.postImage.setImageResource(currentItem.image)
    }
}